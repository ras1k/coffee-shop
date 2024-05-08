const config = useRuntimeConfig()

const confUrl = config.public.apiUrl;

const endPoint = '/get-order-by-user';

export default defineEventHandler(async (event) => {
  const orderData = await readBody(event)
  const order = await $fetch(
    confUrl+endPoint, {
      method: 'GET'
    }
  )

  return order
})
