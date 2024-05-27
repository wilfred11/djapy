const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {configBasic, configDataTable, config_, config_dt_} = require('./webpack.config.js')
module.exports = [merge(configBasic, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    writeToDisk: true, // Write files to disk in dev mode, so Django can serve the assets
  },
  //watch: true
  // ... (environment-specific settings)
}), merge(configDataTable, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    writeToDisk: true, // Write files to disk in dev mode, so Django can serve the assets
    hot: true,
  },
  // ... (environment-specific settings)
}),merge(config_, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    writeToDisk: true, // Write files to disk in dev mode, so Django can serve the assets
    hot: true,
  },
  // ... (environment-specific settings)
}),merge(config_dt_, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    writeToDisk: true, // Write files to disk in dev mode, so Django can serve the assets
    hot: true
  },
  // ... (environment-specific settings)
})
]

for(var i = 0; i < 4;i++){
  module.exports[i].plugins=module.exports[i].plugins.concat(
    [new MiniCssExtractPlugin({
      filename: '../css/[name].css',
    })],
  );
}


