//https://medium.com/anuix/set-multiple-outputs-in-webpack-aa1e16da9b56

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const basicPages = ["page_1.js", "page_2.js"];
const datatablePages = ["page_1.js", "page_2.js"];

var config = {
    //entry: './src/djapy_app/js/index.js',
    mode: 'none',
    /*output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'static', 'djapy_app', 'js')
    },*/
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    output: {
        clean: true,
    }
    /*plugins: [
        new  MiniCssExtractPlugin({
            filename: '../css/index.css',
        }),
    ]*/
}

var configBasic = Object.assign({}, config, {
    name: "configBasic",
    entry: './src/djapy_app/js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'static', 'djapy_app', 'js')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/index.css',
        })
    ]
});

var configDataTable = Object.assign({}, config, {
    name: "configDataTable",
    entry: './src/djapy_app/js/index-dt.js',
    output: {
        filename: 'index-dt.js',
        path: path.resolve(__dirname, 'static', 'djapy_app', 'js')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/index.css',
        })
    ]
});

module.exports = [configBasic, configDataTable]