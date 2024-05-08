import type { UseFetchOptions } from '#app'
import { defu } from 'defu'

const config = useRuntimeConfig()
 const accessToken = useCookie('tokenCookie')

export default async function useApiFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
 
  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiUrl,
    key: url,
    headers: accessToken.value
      ? { Authorization: `Bearer ${accessToken.value}` }
      : {},
    onResponse: async ({ response, options }) => {
      if (response.status === 401) {
        try {
          const newToken = await refreshToken()
          accessToken.value = newToken

          options.headers =     
          useFetch(url, options as UseFetchOptions<T>)
        } catch (error) {
          console.error('Token refresh failed:', error)
        }
      }
    },
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}

async function refreshToken() {
  const refreshToken = useCookie('refreshToken')

  const { data, status } = await useFetch<{ access: string }>(
    'http://127.0.0.1:8000/api/token/refresh/',
    {
      method: 'POST',
      body: { refresh: refreshToken.value },
    }
  )

  if (status.value === 'success') {
    return data.value?.access
  } else {
    throw new Error('Token refresh failed')
  }
}