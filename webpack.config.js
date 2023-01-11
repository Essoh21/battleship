const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.(svg|png|ico|jpg|jpeg|webp|gif|)$/i,
                type: "asset/resource",
            },

            {
                test: /\.(js|jsx)$/i,
                use: 'babel-loader',
            },
        ],
    },

    // Plugins

    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}