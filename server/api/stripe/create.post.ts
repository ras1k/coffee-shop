import Stripe from 'stripe'

const config = useRuntimeConfig()
const stripe = new Stripe(
  'sk_test_51O1nZWKGnxnRW2Flnv7irBUg5GcE4cd922N1xIaOj0oNOcSjXLyujnTc5NHsfbcilpgoDOYEFHc0FNtBVQ9CRdp700w39crx2l',
  null
)
export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  const amount = data.amount
 

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer_email: data.email,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Product Purchase Payment',
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${config.public.siteUrl}success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${config.public.siteUrl}cancel`,
  })

  return {
    sessionId: session.id,
  }
  // } catch (error) {
  //   console.error('Error creating session:', error)
  //   return { error: 'Failed to create session.' }
  // }
})
