import { useCookie } from 'nuxt/app'
import { FetchOptions } from 'ohmyfetch'

export const useApi = (url: string, opts?: FetchOptions) => {
  const  token  = useCookie('tokenCookie')
const config = useRuntimeConfig()

const apiBaseUrl = config.public.apiUrl
  const headers: HeadersInit = {
    ...(opts?.headers || {}),
    ...(token && { Authorization: `Bearer ${token.value}` }),
  }

  return $fetch(apiBaseUrl+url, { ...opts, headers })
}
