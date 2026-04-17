module.exports = {
  async rewrites() {
    return [
      {
        source: "/item/:id([0-9a-f]{32}).json",
        destination: "/api/items/:id?single=1",
      },
      {
        source: "/item/:id([0-9a-f]{32}).raw",
        destination: "/api/items/raw/:id",
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      }
    }

    return config
  }
}
