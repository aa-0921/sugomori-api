const merge = require('webpack-merge');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const environment = require('./environment');
module.exports = merge(environment.toWebpackConfig().delete('entry'), {
  entry: {
    App: '/app/app/javascript/packs/App.jsx',
  },
});
