/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: [
            '@apollo/client',
            '@noble/hashes',
            '@noble/hashes'
        ]
    }
};

export default nextConfig;
