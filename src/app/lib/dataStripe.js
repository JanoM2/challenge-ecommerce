import Stripe from "stripe";
import STRIPE_KEYS from "../../app/api/stripe-keys";

const stripe = new Stripe(STRIPE_KEYS.secret, {
  apiVersion: "2020-08-27",
});

const createProductAndPrice = async () => {
  const productStorage = localStorage.getItem("productState") || [];
  const products = JSON.parse(productStorage);

  const stripeProducts = [];

  for (const product of products) {
    const stripeProduct = await stripe.products.create({
      name: product.title,
      description: product.description,
      images: [product.image],
    });

    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: product.price * 100,
      currency: "usd",
    });

    stripeProducts.push({
      productQuantity: product.quantity,
      priceId: stripePrice.id,
    });
  }

  return stripeProducts;
};

export default createProductAndPrice;
