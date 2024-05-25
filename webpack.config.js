//https://medium.com/anuix/set-multiple-outputs-in-webpack-aa1e16da9b56

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginDjango = require("html-webpack-plugin-django");
const HtmlWebpackInjector = require('html-webpack-injector');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const fs = require('fs');

//const basicPages = ['home', "page_1", "page_2"];
//const datatablePages = ["families", 'some'];
const EXTENSION = '.js';

datatablePath = path.resolve(__dirname, 'src', 'djapy_app', 'pages','dt')
datatableFilenames = fs.readdirSync(datatablePath);
datatableFilenames = datatableFilenames.map(file => {
    if (path.extname(file).toLowerCase() === EXTENSION) {
        return file;
    }
});
const datatablePages = datatableFilenames.map(function(e){ return path.parse(e).name });
basicPath = path.resolve(__dirname, 'src', 'djapy_app', 'pages','basic');
basicFilenames = fs.readdirSync(basicPath);
basicFilenames = basicFilenames.map(file => {
    if (path.extname(file).toLowerCase() === EXTENSION) {
        return file;
    }
});
const basicPages = basicFilenames.map(function(e){ return path.parse(e).name });


var config = {
    mode: 'none',
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
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    /*splitChunks: {
      chunks: "all",
    },*/
    },
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
    plugins: [].concat(
     new ESLintPlugin({fix:true, files:["src/**/*.js"]}),
     //new CleanWebpackPlugin(),
     basicPages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: false,
          template:path.resolve(__dirname, 'src', 'djapy_app','page.ejs'),
          filename: path.resolve(__dirname,'templates','gen','basic',  `${page}`, `${page}-gen.html`),
          chunks: [page],
        })
      ),
      new HtmlWebpackPluginDjango({ bundlePath: "djapy_app/pages/basic/js" }),
      //new CleanupMiniCssExtractPlugin(),
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
        path: path.resolve(__dirname, 'static', 'djapy_app','pages', 'dt','js'),
        clean: true,
    },
    plugins: [].concat(
        new ESLintPlugin({fix:true, files:["src/**/*.js"]}),
     //new CleanWebpackPlugin(),
        datatablePages.map(
          (page) =>
            new HtmlWebpackPlugin({
              inject: false,
              template:path.resolve(__dirname, 'src', 'djapy_app','page_dt.ejs'),
              filename: path.resolve(__dirname,'templates', 'gen', 'dt', `${page}`, `${page}-gen.html`),
              chunks: [page],
            })
        ),
        new HtmlWebpackPluginDjango({ bundlePath: "djapy_app/pages/dt/js" }),
        //new CleanupMiniCssExtractPlugin(),
        new HtmlWebpackInjector())
});

var config_ = Object.assign({}, config, {
    name: "config_",
    entry: {index: ['./src/djapy_app/js/index.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static', 'djapy_app','basic', 'js'),
        clean: true
    },
    plugins: [
        new ESLintPlugin({fix:true, files:["src/**/*.js"]}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'djapy_app','index.ejs'),
            filename: path.resolve(__dirname,'templates', 'base-gen', 'base_.html'),
            chunks: ["index"],
            inject:false
        }),
        new HtmlWebpackPluginDjango({ bundlePath: "djapy_app/basic/js" }),
        //new CleanupMiniCssExtractPlugin(),
        new HtmlWebpackInjector()
    ]
});

var config_dt_ = Object.assign({}, config, {
    name: "config_dt_",
    entry: {index_dt:['./src/djapy_app/js/index.js','./src/djapy_app/js/index-jq.js', './src/djapy_app/js/index-dt.js']},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static', 'djapy_app', 'dt', 'js'),
        clean: true
    },
    plugins: [
        new ESLintPlugin({fix:true, files:["src/**/*.js"]}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'djapy_app','index.ejs'),
            filename: path.resolve(__dirname,'templates', 'base-gen', 'base_dt.html'),
            chunks: ["index_dt"],
            inject:false
        }),
        new HtmlWebpackPluginDjango({ bundlePath: "djapy_app/dt/js" }),
        //new CleanupMiniCssExtractPlugin(),
        new HtmlWebpackInjector()
    ]
});

module.exports = {configBasic, configDataTable, config_, config_dt_}