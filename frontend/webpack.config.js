const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
// const tailwindcssPlugin = require('tailwindcss');
// const autoprefixerPlugin = require('autoprefixer');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
module.exports = [{
    mode: 'none',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    entry: {
      application: './src/javascripts/application.tsx',
    },
    output: {
      path: path.resolve(__dirname, '../app/assets/javascripts'),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.tsx', '.scss', '.js', '.ts'],
    },
    module: {
      <<
      <<
      << < HEAD
      rules: [{
          test: /\.(js|jsx|tsx)$/,
          // test: /\.js$|tsx/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            query: {
              presets: [
                // '@babel/preset-env',
                'es2015',
                'react',
              ],
            },
          }, ],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false
              },
            },
          ],
        },
        {
          // test: /\.ts$/,
          test: /\.(js|jsx|tsx)$/,
          loader: 'ts-loader',
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(png|jpg|jpeg|gif|woff)$/,
          loader: 'url?limit=8192'
        },
        {
          test: /\.(otf|eot|ttf)$/,
          loader: 'file?prefix=font/'
        },
        {
          test: /\.svg$/,
          loader: 'file'
        },
      ],
      ===
      ===
      =
      rules: [{
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      }, ],
      >>>
      >>>
      > fix / webpack - errors
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
      <<
      <<
      << < HEAD
      rules: [{
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
      ],
      ===
      ===
      =
      rules: [{
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        ]
      }, ],
      >>>
      >>>
      > fix / webpack - errors
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
