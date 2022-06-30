const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const absolutePathToDist = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    main: './src/public/javascript/main.js',
    about: './src/public/javascript/about.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: absolutePathToDist,
    publicPath: '/static/',
  },
  mode: 'development',
  devServer: {
    static: {
      directory: absolutePathToDist,
    },
    port: 9000,
    devMiddleware: {
      // index: 'index.html',
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
      // {
      //   test: /\.hbs$/,
      //   use: ['handlebars-loader'],
      // },
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
    // new MiniCssExtractPlugin({
    //   // filename: 'styles.[contenthash].css',
    //   filename: 'styles.css',
    // }),
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Index',
    //   filename: 'index.html',
    //   chunks: ['index'],
    //   template: 'src/page-template.hbs',
    //   description: 'Index Page',
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'About',
    //   filename: 'about.html',
    //   chunks: ['about'],
    //   template: 'src/page-template.hbs',
    //   description: 'About Page',
    // }),
  ],
  devtool: 'source-map',
};
