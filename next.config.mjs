/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // <-- AÑADE ESTAS LÍNEAS
  },
};
export default nextConfig;