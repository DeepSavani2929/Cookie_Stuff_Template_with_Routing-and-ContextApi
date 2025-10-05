import React from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.href,
        },
        redirect: "if_required",
      });

      if (error) {
        navigate("/paymentCancel");
      } else {
        if (paymentIntent && paymentIntent.status === "succeeded") {
          onSuccess();
          navigate("/paymentSuccess");
        } else {
          onSuccess();
          navigate("/paymentCancel");
        }
      }
    } catch (err) {
      console.error("Stripe confirmPayment error:", err);
      navigate("/paymentCancel");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Pay Now
      </Button>
    </form>
  );
};

export default CheckoutForm;
