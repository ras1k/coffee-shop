const config = useRuntimeConfig()


export default defineEventHandler(async (event) => {
  const menu = await $fetch(
    config.public.apiUrl+'/get-menu'
  )

  return menu
})
