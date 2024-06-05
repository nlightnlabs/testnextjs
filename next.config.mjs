/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV;

const nextConfig = {
    basePath: environment === "production" ? '/testnextjs' : '',
};

export default nextConfig;

