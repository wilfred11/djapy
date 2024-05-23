const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/index.[contenthash].css',
        })
    ],
    }),merge(config_dt_, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/index-dt.[contenthash].css',
        })
    ]
    // ... (environment-specific settings)
})
]