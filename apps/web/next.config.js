module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  webpack(config) {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel', '@babel/preset-typescript'],
        },
      },
    });
    return config;
  },
};
