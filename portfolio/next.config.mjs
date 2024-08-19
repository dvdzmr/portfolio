/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: 'dist',
    reactStrictMode: true,
    skipTrailingSlashRedirect: true,
    trailingSlash: true,
};

export default nextConfig;
