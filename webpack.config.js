const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'DS Dashboard',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              ['postcss-preset-env']
            ]
          }
        }
      }] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } }
    ]
  },
  mode: 'development',
  devtool: 'eval',
  devServer: {
    static: path.resolve(__dirname, 'dist')
  }
}

