const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'index.js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            minify: TerserPlugin.esbuildMinify,
            terserOptions: {},
        })],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ],
}