

const config = useRuntimeConfig()

const confUrl = config.public.apiUrl;

const endPoint = '/get-order';

export default defineEventHandler(async (event) => {
      // return useCookie()
  const products = await useApiFetch(config.public.apiUrl + '/get-order')

  return products
})
