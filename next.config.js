/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    env: {
        EMAIL: 'declanrappdesign@gmail.com',
        CLIENT_ID: '555694727740-dtk2ada5v2r7at478ggil2gmpgnb7mp7.apps.googleusercontent.com',
        CLIENT_SECRET: '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',
        REFRESH_TOKEN: '1//04KAaziiHYhQ4CgYIARAAGAQSNwF-L9Irups7n0lRw83Df8SKYE3IvnYeBn72T7y0xbfJQmxqmNDXdkxnYauKmPeksYL4SrmOrkQ',
        ACCESS_TOKEN: 'ya29.a0AbVbY6OEu4LryGzvVJDvs8LS-rwsvqt1PyyxA2Nb1g9zdsAaXUhfhmBb3tZwZ-yrpKYaiHlQNjo17hwmWrmUk9ZbsTWe82BXoHJkLUu1JloTBf__IeSi0q2YKEv_yill-PWsioj_C_wgjsx5P0Ad4R7A7yvpaCgYKAXUSARASFQFWKvPlk4oVL2mSP-4Yl2EOe8xiPA0163'
    }
}

module.exports = nextConfig
