/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
    basePath: isProduction ? '/testnextjs' : '',
};

export default nextConfig;
