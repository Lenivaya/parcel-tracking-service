// import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    experimental: {
        optimizePackageImports: [
            '@apollo/client',
            '@apollo/experimental-nextjs-app-support',
            '@apollo/persisted-query-lists',
            'apollo3-cache-persist',
            'graphql',
            'graphql-ws',
            'react-qr-code',
            '@noble/hashes',
            'uint8arrays',
            'ts-pattern',
            '@mobily/ts-belt',
            'framer-motion',
        ]
    }
}

// const millionConfig = {
//     auto: true // if you're using RSC: auto: { rsc: true },
// }

// export default million.next(nextConfig, millionConfig)
export default nextConfig;
