var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", "./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js"
    },
    watch: false,
    module: {
    loaders: [
      {
      test: /\.css$/,
     use: ['style-loader', 'css-loader']
    },
    {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', "stage-0"]
        }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve('public/index.html'),
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true, compress: {
      warnings: false
   }})
  ],
  devServer: {
    port: 8088
}
};