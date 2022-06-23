/* eslint-disable node/no-extraneous-require */
/* eslint-disable node/no-unpublished-require */
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const absolutePathToDist = path.resolve(__dirname, './dist');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: absolutePathToDist,
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: {
      directory: absolutePathToDist,
    },
    port: 9000,
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.(css)$/,
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module\.(scss|sass)$/,
      },
      {
        test: /\.module\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'sass-loader',
        ],
      },

      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    // new TerserPlugin(), // not needed during dev
    // new MiniCssExtractPlugin({
    //   filename: 'styles.[contenthash].css',
    // }),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: [
    //     '**/*', // remove all files in dist folder | default behavior of plugin
    //     path.join(process.cwd(), 'build/**/*')  // additional folder to clean
    //   ]
    // }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Index',
      // filename: 'subfolder/custom_filename.html',
      // meta: {
      //   description: 'Some description'
      // }
      template: 'src/client/index.hbs',
      description: 'Entrypoint for HTML',
    }),
  ],
};
