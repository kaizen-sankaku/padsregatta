const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserPlugin = require('terser-webpack-plugin'); // already included in production by webpack

const path = require('path');

const absolutePathToDist = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/about.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static/',
  },
  mode: 'production',
  // devServer not  needed for prod unless you want to verify how the js is bundles,
  // css is loaded, and if css is extracted to its own file
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
        test: /\.txt/,
        type: 'asset/source',
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /\.module\.(css)$/,
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /\.module\.(scss|sass)$/,
      },
      {
        test: /\.module\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    // new TerserPlugin(), // already included in production by webpack
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: [
    //     '**/*', // remove all files in dist folder | default behavior of plugin
    //     path.join(process.cwd(), 'build/**/*')  // additional folder to clean
    //   ]
    // }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Index',
      filename: 'index.html',
      chunks: ['index'],
      template: 'src/page-template.hbs',
      description: 'Index Page',
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      filename: 'about.html',
      chunks: ['about'],
      template: 'src/page-template.hbs',
      description: 'About Page',
    }),
  ],
};
