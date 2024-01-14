import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styles from "./TpayFrame.module.css";

const TpayFrame = ({ total, username, carId, pickupDate, returnDate, setReservationStatus }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    setLoading(true);

    const { token, error } = await stripe.createToken(cardElement);

    setLoading(false);

    if (error) {
      console.error(error);
    } else {
      await handlePayment(token.id);
    }
  };

  const handlePayment = async (tokenId) => {
    try {
      const response = await fetch("http://localhost:3000/v1/tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          id: carId,
          dateFrom: pickupDate,
          dateTo: returnDate,
          wallet: total,
          tokenId: tokenId,
          card: {
            number: carId,                                                                
          },
        }),
      });

      if (response.ok) {
        console.log("Payment success");
        setReservationStatus("success");
      } else {
        console.error("Payment failure");
        setReservationStatus("failure");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      setReservationStatus("failure");
    }
  };

  return (
    <div className={styles.tpayFrame}>
      <form onSubmit={handleSubmit} className={styles.tpay}>
        <div className={styles.cardElementContainer}>
          <label className={styles.cardElementLabel}>Card Details</label>
          <CardElement
            name={username}
            id={carId}
            wallet={total}
            options={{
              style: {
                base: {
                },
              },
            }}
          />
        </div>
        <button type="submit" disabled={loading} className={styles.payButton}>
          Pay {total} PLN
        </button>
      </form>
    </div>
  );
};

export default TpayFrame;