const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
// const tailwindcssPlugin = require('tailwindcss');
// const autoprefixerPlugin = require('autoprefixer');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
require('dotenv').config();
console.info('NODE_ENVの確認');
console.info('NODE_ENV: ', process.env.NODE_ENV);

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
        // {
        //   // 拡張子 .ts もしくは .tsx の場合
        //   test: /\.tsx?$/,
        //   // TypeScript をコンパイルする
        //   use: 'ts-loader',
        // },
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
            },
          },

          // loader: 'babel-loader',
          // options: {
          //   presets: ['react'],
          // },
          // query: {
          //   // presets: ['es2015', 'react'],
          //   presets: ['react'],
          // },
        },
        {
          // iフラグを使うと大文字小文字を区別しない
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader',
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'react-svg-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new Dotenv({ path: path.resolve(__dirname, '..', '.env') }),
      // new Dotenv({ path: path.resolve(__dirname, '..', './.env') }),

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
