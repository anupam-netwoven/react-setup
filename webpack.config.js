const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ['./src/app/main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ hash: true, template: './src/index.html' }),
        new CleanWebpackPlugin(['dist'])
    ],
};