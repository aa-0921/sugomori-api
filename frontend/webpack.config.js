const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
module.exports = [
  {
    mode: 'none',
    entry: {
      application: './src/javascripts/application.tsx',
    },
    output: {
      path: path.resolve(__dirname, '../app/assets/javascripts'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
          },
        },
      ],
    },
    plugins: [new CaseSensitivePathsPlugin()],
  },
  {
    mode: 'none',
    entry: {
      application: './src/stylesheets/application.scss',
    },
    output: {
      path: path.resolve(__dirname, '../app/assets/stylesheets'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  },
];
