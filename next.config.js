/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ["images.all-free-download.com"]
  }
};

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//     serverComponentsExternalPackages: ["mongoose"]
//   },
//   images: {
//     domains: ["images.all-free-download.com"]
//   },
//   webpack(config) {
//     config.experiments = {
//       ...config.experiments,
//       topLevelAwait: true
//     };
//     return config;
//   }
// };

// module.exports = nextConfig;
