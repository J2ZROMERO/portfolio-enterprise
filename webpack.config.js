const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
     bundle:   path.resolve(__dirname, 'src/index.js' ),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        watchFiles: ['src/*.html', 'src/**/*.scss', 'src/*.js']
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3. Inject styles into DOM
                    'css-loader', // 2. Turns css into commonjs
                    'sass-loader' // 1. Turns sass into css
                ]
            },
        ],
      },
plugins: [
    new HtmlWebpackPlugin({
        title: 'Enterprise',
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/template.html'),
    }),
],
}