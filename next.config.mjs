/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination:
          "https://azfun-increff-caas-dev.azurewebsites.net/api/ui-testing",
      },
    ];
  },
};

export default nextConfig;
