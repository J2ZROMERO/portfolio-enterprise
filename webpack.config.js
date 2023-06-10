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
        clean: true,
        assetModuleFilename: '[name][ext]'
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
                test: /\.(scss|sass|css)$/,
                use: [
                    'style-loader', // 3. Inject styles into DOM
                    'css-loader', // 2. Turns css into commonjs
                    'sass-loader' // 1. Turns sass into css
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }

            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[path][name].[ext]',
                    //   outputPath: 'img/',
                    },
                  },
                ],
              },
              
            {
                test: /fontawesome-free\.(svg|eot|ttf|woff|woff2)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                    //   outputPath: 'fonts/',
                    //   publicPath: '../fonts/',
                    },
                  },
                ],
              }
              

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