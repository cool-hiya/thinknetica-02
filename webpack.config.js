const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['@babel/polyfill', './index.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200,
        writeToDisk: true,
        open: true
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: '../'}
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer()
                            ],
                        }
                    },
                    'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
        new GhPagesWebpackPlugin({
            path: path.resolve(__dirname, 'dist')
        }),
        new webpack.DefinePlugin({
            NODE_ENV: process.env.NODE_ENV
        })
    ]
}