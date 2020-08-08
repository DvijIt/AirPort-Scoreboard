const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;
  const config = {
    entry: './src/index.jsx',
    output: {
      filename: 'bundle.js',
      publicPath: isProduction ? './' : '/',
      path: path.resolve(__dirname, 'build')
    },
    module: {
      rules: [{
        test: /.jsx?$/,
        use: ['babel-loader']
      },
      {
        test: /.s?css$/,
        use: [
          isProduction
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: isProduction
      })
    ],
    devServer: {
      hot: true,
      port: 1800,
      historyApiFallback: true
    },
    devtool: isDevelopment ? 'source-map' : false,
    resolve: {
      extensions: ['.js', '.ts', '.jsx']
    }
  };

  if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[name].css'
    }));
  }

  return config;
}
