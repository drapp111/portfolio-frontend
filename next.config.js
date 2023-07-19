/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    env: {
        ENVIRONMENT: "DEV",
        
        API_ENDPOINT: 'http://localhost:3001/'
    }
}

module.exports = nextConfig
