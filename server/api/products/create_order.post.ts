const config = useRuntimeConfig()

const confUrl = config.public.apiUrl;

const endPoint = '/create-order';

export default defineEventHandler(async (event) => {
  const orderData = await readBody(event)
  const order = await $fetch(
    config.public.apiUrl+'/create-order', {
      method: 'POST',
      body:orderData
    }
  )

  return order
})
