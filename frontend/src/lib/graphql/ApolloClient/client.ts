import {
  authLink,
  HTTP_ENDPOINT,
  persistedQueryLink
} from '@/lib/graphql/ApolloClient/common'
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
// import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

const httpLink = new HttpLink({
  uri: HTTP_ENDPOINT
})

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     connectToDevTools: process.env.NODE_ENV === 'development',
//     cache: new InMemoryCache(),
//     link: ApolloLink.from([persistedQueryLink, authLink, httpLink])
//   })
// })
