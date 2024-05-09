// import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizePackageImports: [
            '@apollo/client',
            '@apollo/experimental-nextjs-app-support',
            'apollo3-cache-persist',
            'graphql',
            'graphql-ws',
            'react-qr-code',
            '@noble/hashes',
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
