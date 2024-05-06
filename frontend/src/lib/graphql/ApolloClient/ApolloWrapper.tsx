'use client'

import React from 'react'
import {
  authLink,
  HTTP_ENDPOINT,
  persistedQueryLink
} from '@/lib/graphql/ApolloClient/common'
import { ApolloLink, HttpLink, split } from '@apollo/client'
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr'
import { isBrowser } from 'browser-or-node'
import { wsLink } from '@/lib/graphql/ApolloClient/client'
import { getMainDefinition } from '@apollo/client/utilities'

export const makeClient = () => {
  const httpLink = new HttpLink({
    uri: HTTP_ENDPOINT,
    fetchOptions: { cache: 'no-store' }
  })

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )

  return new NextSSRApolloClient({
    connectToDevTools: process.env.NODE_ENV === 'development',
    cache: new NextSSRInMemoryCache({}),
    link: isBrowser
      ? ApolloLink.from([persistedQueryLink, authLink, splitLink])
      : ApolloLink.from([
          persistedQueryLink,
          new SSRMultipartLink({
            stripDefer: true
          }),
          authLink,
          splitLink
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
