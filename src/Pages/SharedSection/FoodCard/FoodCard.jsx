/* eslint-disable react/prop-types */

import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCart from "../../../Hooks/UseCart";




const FoodCard = ({ item }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = UseAxiosSecure()
    const [,refetch] = UseCart()

    const { name, recipe, image, price } = item || {}
    const {user} = UseAuth()
    const email = user?.email

    const handleAddtoCart = () => {
       if(user && user?.email){
        
        const cartItem = {
            name, email, image, recipe, price
        }

        axiosSecure.post( '/carts' , cartItem)
        .then( res => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${name} added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                //   refetch cart to update the cart
                refetch()
            }
        })
       }
       else {
        Swal.fire({
            title: "You are not logged in",
            text: "please login first to order",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "go to login"
          }).then((result) => {
            if (result.isConfirmed) {
            navigate('/login' , { state: {from:location}})
            }
          });
           
       }
  
    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl relative">
                <figure className="">
                    <img src={image} alt="Food image" className=" h-56 w-full" />
                    
                </figure>
                <p className="text-white bg-black px-4 py-2 w-fit absolute top-3 right-3 ">${price}</p>
                <div className=" space-y-2 bg-gray-200">
                    <h2 className="text-xl text-black font-bold mt-5">{name}</h2>
                    <p className="mx-3 text-gray-500 text-xs md:text-sm md:h-16"> {recipe}</p>
                    <div className="text-center pb-4 ">
                        <button
                        onClick={handleAddtoCart}
                        className="btn btn-outline w-3/6 uppercase border-yellow-600 text-yellow-600 hover:text-yellow-600  border-t-0 border-r-0 border-l-0 ">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;