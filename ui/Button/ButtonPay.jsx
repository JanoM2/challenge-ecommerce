"use client";

import STRIPE_KEYS from "../../src/app/api/stripe-keys";
import createProductAndPrice from "../../src/app/lib/dataStripe";
import Stripe from "stripe";

const stripe = new Stripe(STRIPE_KEYS.secret, {
  apiVersion: "2020-08-27",
});

export default function ButtonPay({ props }) {
  const handleCheckout = async () => {
    try {
      const productsAndPrices = await createProductAndPrice();

      const lineItems = productsAndPrices.map(
        ({ productQuantity, priceId }) => ({
          price: priceId,
          quantity: productQuantity,
        })
      );

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/order/succes",
        cancel_url: "http://localhost:3000/order/error",
      });

      window.location.href = session.url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Pagar
    </button>
  );
}
