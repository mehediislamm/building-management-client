import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

 

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_payment_Gatway_PK);
    return (
        <div>
            <h1 className="text-2xl text-center">PAYMENT</h1>
            <div>
                <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;