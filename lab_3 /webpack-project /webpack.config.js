// webpack.config.js 
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = { 
 mode: 'none',
 entry: { 
 main: path.resolve(__dirname, './src/index.js'), 
 }, 
 output: { 
    path: path.resolve(__dirname, './dist'), 
    filename: '[name].bundle.js', 
 },
 plugins: [ 
   new CleanWebpackPlugin(),
   new HtmlWebpackPlugin({ 
   title: 'webpack Boilerplate', 
   template: path.resolve(__dirname, './src/pages/index.html'), 
   filename: 'index.html',
      },
      {
   title: 'webpack Boilerplate', 
   template: path.resolve(__dirname, './src/pages/about.html'), 
   filename: 'about.html', 
      }), 
   ],
devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
} 
