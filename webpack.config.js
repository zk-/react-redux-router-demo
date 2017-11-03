var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './',
        hot: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react','stage-0']
                    }
                }
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};