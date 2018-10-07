const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: 'tslint.json',
              emitErrors: true,
              failOnHint: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'typings-for-css-modules-loader?modules&localIdentName=[local]__[hash:base64:5]&camelCase=only&namedExport&importLoaders=1&minimize'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Josh Milo',
      template: 'index.html',
      filename: './index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};
