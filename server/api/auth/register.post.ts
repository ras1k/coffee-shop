const config = useRuntimeConfig()

const confUrl = config.public.apiUrl;

const endPoint = '/registration';

export default defineEventHandler(async (event) => {
  const orderData = await readBody(event)
  return   {orderData};

  const order = await $fetch(
    config.public.apiUrl+'/registration', {
      method: 'POST',
      body:orderData,
      headers: {
        'Content-Type': 'application/json',
        "Content-Type": "multipart/form-data",
        'Accept': 'application/json'
      }
    },
  )

  return order
})
