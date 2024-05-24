const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const {configBasic, configDataTable, config_, config_dt_} = require('./webpack.config.js')

module.exports = [merge(configBasic, {
    mode: 'production',

    output: {
        filename: "[name].[contenthash].js",
    },
    }), merge(configDataTable, {
    mode: 'production',
    output: {
         filename: "[name]-dt.[contenthash].js",
    },
    }),merge(config_, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },

    }),merge(config_dt_, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },

    // ... (environment-specific settings)
})
]


 for(var i = 0; i < 4;i++){
    module.exports[i].plugins=module.exports[i].plugins.concat(
        [new MiniCssExtractPlugin({
           filename: '../css/[name].[contenthash].css',
        })],
    );

    module.exports[i].optimization = {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    }
    module.exports[i].devtool = 'source-map'

}

//console.log(module.exports[0])