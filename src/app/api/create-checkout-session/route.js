import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { cart, customer, totalAmount } = await req.json();

    const lineItems = cart.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `Item ID: ${item.productId}`,
          description: `Quantity: ${item.quantity} | Lease Duration: ${item.leaseDuration || 'N/A'}`,
        },
        unit_amount: Math.round((totalAmount / cart.length) * 100), 
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: customer.email,
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/?checkout=success`,
      cancel_url: `${req.headers.get('origin')}/?checkout=canceled`,
    });

    return NextResponse.json({ stripeCheckoutUrl: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json(
      { error: 'Failed to create Stripe session.' },
      { status: 500 }
    );
  }
}
