import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheackoutForm from "./CheackoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
const Payment = () => {
    return (
        <div>
            <SectionTitle subtitle={'Please Pay to Eat'} heading={'Payment'}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheackoutForm></CheackoutForm>

                </Elements>
            </div>
        </div>
    );
};

export default Payment;