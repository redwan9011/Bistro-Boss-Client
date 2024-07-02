import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCart from "../../Hooks/UseCart";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";


const CheackoutForm = () => {
    const {user} = UseAuth()
    const [error, setError] = useState('')
    const [ clientsecret , setClientsecret] = useState('')
    const [transjactionId, setTransjactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const [cart, refetch] = UseCart()
    const totalPrice = cart.reduce((total, item)=> total + item.price , 0)
    useEffect( ()=> {
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent' , { price: totalPrice})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientsecret(res.data.clientSecret)
        })
        }
    }, [axiosSecure, totalPrice])
    const handleSubmit= async (event) => {
        
        event.preventDefault()
        if(!stripe || !elements) {
            return 
        }
        const card = elements.getElement(CardElement)
        if(!card) {
            return
        }

        const {error,  paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error) {
            console.log('payment Error' , error);
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod);
            setError('')
        }
        const {paymentIntent, error:confirmError } = await stripe.confirmCardPayment(clientsecret, {
            payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'annynomous',
                  email: user?.email || 'annynomous'
                },
              },
        } )
        if(confirmError){
            console.log('confirm error');
        }
        else{ 
            console.log('payment intent' , paymentIntent);
            if( paymentIntent.status === 'succeeded'){
                console.log("transjaction id", paymentIntent.id);
                setTransjactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user?.email,
                    payment: totalPrice,
                    date: new Date(),  
                    transjactionId: paymentIntent.id,
                    cartId: cart.map(item => item._id),
                    status: 'pending'
                }

                axiosSecure.post( '/payment'  , payment)
                .then( res => {
                    console.log('payment saved', res.data);
                    if(res.data?.result?.insertedId ){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Thank you for your payment",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
            
                refetch()
            }
        }
    }   
    return (
       <form onSubmit={handleSubmit}>

        <CardElement
         options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        ></CardElement>

        <button className="btn btn-primary mt-4" type="submit" disabled={!stripe || !clientsecret}>Pay</button>
        <p className="text-red-500">{error && error}</p>
        {
            transjactionId && <p className="text-green-600"> Your transjactionId {transjactionId}</p>
        }
       </form>
    );
};

export default CheackoutForm;