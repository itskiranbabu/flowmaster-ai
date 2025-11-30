import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
})

// Pricing plans
export const PRICING_PLANS = {
  free: {
    name: 'Free',
    price: 0,
    tasks: 100,
    workflows: 5,
    features: ['100 tasks/month', '5 workflows', 'Basic integrations'],
  },
  pro: {
    name: 'Pro',
    price: 29,
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    tasks: 10000,
    workflows: -1, // unlimited
    features: [
      '10,000 tasks/month',
      'Unlimited workflows',
      'All integrations',
      'AI suggestions',
    ],
  },
  business: {
    name: 'Business',
    price: 99,
    priceId: process.env.STRIPE_BUSINESS_PRICE_ID,
    tasks: 100000,
    workflows: -1, // unlimited
    features: [
      '100,000 tasks/month',
      'Team collaboration',
      'Priority support',
      'Advanced analytics',
    ],
  },
}

export async function createCheckoutSession(
  customerId: string,
  priceId: string,
  successUrl: string,
  cancelUrl: string
) {
  return await stripe.checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
  })
}

export async function createCustomerPortalSession(
  customerId: string,
  returnUrl: string
) {
  return await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })
}