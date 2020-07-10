const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
module.exports = [
  {
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
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx)$/,
          // test: /\.js$|tsx/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: [
                  // '@babel/preset-env',
                  'es2015',
                  'react',
                ],
              },
            },
          ],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { url: false },
            },
          ],
        },
        {
          // test: /\.ts$/,
          test: /\.(js|jsx|tsx)$/,
          loader: 'ts-loader',
        },
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.scss$/, loader: 'style-loader!css-loader' },
        { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url?limit=8192' },
        { test: /\.(otf|eot|ttf)$/, loader: 'file?prefix=font/' },
        { test: /\.svg$/, loader: 'file' },
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
        { test: /\.css$/, loader: 'style-loader!css-loader' },
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
