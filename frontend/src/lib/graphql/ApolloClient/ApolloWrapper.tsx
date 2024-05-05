'use client'

import React from 'react'
import {
  authLink,
  HTTP_ENDPOINT,
  persistedQueryLink
} from '@/lib/graphql/ApolloClient/common'
import { ApolloLink, HttpLink } from '@apollo/client'
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr'
import { isBrowser } from 'browser-or-node'

export const makeClient = () => {
  const httpLink = new HttpLink({
    uri: HTTP_ENDPOINT,
    fetchOptions: { cache: 'no-store' }
  })

  return new NextSSRApolloClient({
    connectToDevTools: process.env.NODE_ENV === 'development',
    cache: new NextSSRInMemoryCache({}),
    link: isBrowser
      ? ApolloLink.from([persistedQueryLink, authLink, httpLink])
      : ApolloLink.from([
          persistedQueryLink,
          new SSRMultipartLink({
            stripDefer: true
          }),
          authLink,
          httpLink
        ])
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
