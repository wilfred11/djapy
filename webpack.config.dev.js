const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {configBasic, configDataTable, config_, config_dt_} = require('./webpack.config.js')
module.exports = [merge(configBasic, {
  mode: 'development',
  devtool: 'source-map',
  //watchOptions: {
  //  poll: 1000, // Check for changes every second
  //},
}), merge(configDataTable, {
  mode: 'development',
  devtool: 'source-map',
  //watchOptions: {
  //  poll: 1000, // Check for changes every second
  //},
}),merge(config_, {
  mode: 'development',
  devtool: 'source-map',
  //watchOptions: {
  //  poll: 1000, // Check for changes every second
  //},
}),merge(config_dt_, {
  mode: 'development',
  devtool: 'source-map',
  //watchOptions: {
  //  poll: 1000, // Check for changes every second
  //},
})
]

for(var i = 0; i < 4;i++){
  module.exports[i].plugins=module.exports[i].plugins.concat(
    [new MiniCssExtractPlugin({
      filename: '../css/[name].[contenthash].css',
    })],
  );
  module.exports[i].output.filename = '[name].[contenthash].js';
}


