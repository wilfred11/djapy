//https://medium.com/anuix/set-multiple-outputs-in-webpack-aa1e16da9b56

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const basicPages = ["page_1", "page_2"];
const datatablePages = ["page_1", "page_2"];

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
        //clean: true,
    },
    /*optimization: {
    splitChunks: {
      chunks: "all",
    },
    },*/
    /*plugins: [
        new  MiniCssExtractPlugin({
            filename: '../css/index.css',
        }),
    ]*/
}

var configBasic = Object.assign({}, config, {
    name: "configBasic",
    entry: basicPages.reduce((config, page) => {
        config[page] = `./src/djapy_app/pages/basic/${page}.js`;
        return config;
    }, {}),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'static', 'djapy_app', 'pages','basic', 'js'),
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        })
    ]
});

var configDataTable = Object.assign({}, config, {
    name: "configDataTable",
    entry: datatablePages.reduce((config, page) => {
        config[page] = `./src/djapy_app/pages/dt/${page}.js`;
        return config;
    }, {}),
    output: {
        filename: "[name]-dt.js",
        path: path.resolve(__dirname, 'static', 'djapy_app','pages','dt', 'js'),
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        })
    ]
});

var config_ = Object.assign({}, config, {
    name: "config_",
    entry: './src/djapy_app/js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'static', 'djapy_app', 'js'),
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/index.css',
        })
    ]
});

module.exports = {configBasic, configDataTable, config_}