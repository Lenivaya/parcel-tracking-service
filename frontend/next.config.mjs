import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, experimental: {
        optimizePackageImports: ['@apollo/client', '@noble/hashes', '@noble/hashes']
    }
};

const millionConfig = {
    // auto: true,// if you're using RSC: auto: { rsc: true },
    auto: {rsc: true},// if you're using RSC: auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);