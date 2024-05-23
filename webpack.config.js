//https://medium.com/anuix/set-multiple-outputs-in-webpack-aa1e16da9b56

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginDjango = require("html-webpack-plugin-django");
const HtmlWebpackInjector = require('html-webpack-injector');
const path = require('path');

const basicPages = ['home', "page_1", "page_2"];
const datatablePages = ["families", 'test', 'some'];

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
        //clean: true,
    },
    plugins: [].concat(
    basicPages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: false,
          template:path.resolve(__dirname, 'src', 'djapy_app','page.ejs'),
          filename: path.resolve(__dirname,'templates','gen','basic', `${page}`,`${page}.html`),
          chunks: [page],
        })
    ),new HtmlWebpackPluginDjango({ bundlePath: "djapy_app/pages/basic/js" }), new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        }),
        new HtmlWebpackInjector())
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
    plugins: [].concat(
    datatablePages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: false,
          template:path.resolve(__dirname, 'src', 'djapy_app','page_dt.ejs'),
          filename: path.resolve(__dirname,'templates', 'gen', 'dt', `${page}`,`${page}.html`),
          chunks: [page],
        })
    ),new HtmlWebpackPluginDjango({ bundlePath: "djapy_app/pages/dt/js" }), new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        }),
        new HtmlWebpackInjector())
});

var config_ = Object.assign({}, config, {
    name: "config_",
    entry: {index: ['./src/djapy_app/js/index.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static', 'djapy_app', 'js'),
        //clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'djapy_app','index.ejs'),
            filename: path.resolve(__dirname,'templates', 'base-gen', 'base_.html'),
            chunks: ["index"],
            inject:false
        }),
        new HtmlWebpackPluginDjango({ bundlePath: "djapy_app/js" }),
        new MiniCssExtractPlugin({
            filename: '../css/index.css',
        }),
        new HtmlWebpackInjector()
    ]
});

var config_dt_ = Object.assign({}, config, {
    name: "config_dt_",
    entry: {index_dt:['./src/djapy_app/js/index.js','./src/djapy_app/js/index-jq.js', './src/djapy_app/js/index-dt.js']},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static', 'djapy_app', 'js'),
        //clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'djapy_app','index.ejs'),
            filename: path.resolve(__dirname,'templates', 'base-gen', 'base_dt.html'),
            chunks: ["index_dt"],
            inject:false
        }),
        new HtmlWebpackPluginDjango({ bundlePath: "djapy_app/js" }),
        new MiniCssExtractPlugin({
            filename: '../css/index-dt.css',
        }),
        new HtmlWebpackInjector()
    ]
});

module.exports = {configBasic, configDataTable, config_, config_dt_}