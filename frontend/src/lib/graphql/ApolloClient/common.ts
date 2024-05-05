// import { StrictTypedTypePolicies } from "@/lib/graphql/__generated__/graphql";
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { setContext } from '@apollo/client/link/context'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import { sha256 } from '@noble/hashes/sha256'
import { isBrowser } from 'browser-or-node'

export const HTTP_ENDPOINT = process.env.NEXT_PUBLIC_API_URL

export const authLink = setContext((_, { headers, ...context }) => {
  const token = isBrowser ? localStorage?.getItem('auth:token') : null
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {})
    },
    ...context
  }
})

export const persistedQueryLink = createPersistedQueryLink({
  sha256: (args) => sha256(args).toString()
})

if (process.env.NODE_ENV === 'development') {
  loadDevMessages()
  loadErrorMessages()
}
