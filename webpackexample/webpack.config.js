const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.ts',
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash].js'
    },
    optimization : {
        splitChunks: {
            chunks: 'all',
            name: 'vendor'
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template:path.resolve(__dirname, "src", "index.html")
    })],
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.ts(x)?$/,
                loader: 'ts-loader',
                exclude :/node_modules/
            } 
        ],
    },
    resolve: {
        extensions: [
            '.tsx', '.ts', '.js'
        ]
    }
};

module.exports = config;