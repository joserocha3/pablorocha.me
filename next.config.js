module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
      require('./scripts/generate-robots-txt')
    }

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname,
    }

    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    return config
  },
}
