const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
// const tailwindcssPlugin = require('tailwindcss');
// const autoprefixerPlugin = require('autoprefixer');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
require('dotenv').config();

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
    resolve: {
      extensions: ['.tsx', '.scss', '.js', '.ts', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
          },
        },
      ],
    },
    plugins: [
      new Dotenv({ path: path.resolve(__dirname, './.env') }),
      new CaseSensitivePathsPlugin(),
    ],
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
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      // new tailwindcssPlugin(),
      // new autoprefixerPlugin(),
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  },
];
