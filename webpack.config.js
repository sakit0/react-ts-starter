/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require ('fork-ts-checker-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.*(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: require ('os').cpus ().length - 1,
              poolTimeout: Infinity,
            },
          },
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.join (__dirname, './src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new ForkTsCheckerWebpackPlugin ({checkSyntacticErrors: true}),
  ],
};
