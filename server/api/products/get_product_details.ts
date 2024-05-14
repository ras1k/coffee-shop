const config = useRuntimeConfig()

const confUrl = config.public.apiUrl;

const endPoint = '/get-shoptypeproduct';

export default defineEventHandler(async (event) => {
  const products = await $fetch(
    config.public.apiUrl+'/get-shoptypeproduct'
  )

  return products
})
