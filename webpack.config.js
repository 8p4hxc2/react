const path = require('path');
const APP_DIR = path.resolve(__dirname, 'app');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let output = {
  filename: 'bundle.js'
};

let plugins = [new ExtractTextPlugin('style.css')];

let devtool = "inline-source-map";
let presetBabel = ['es2015', 'react'];

const config = {
  entry: {
    main: APP_DIR + '/index.js'
  },
  devtool: devtool,
  output: output,
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract([
          'css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('autoprefixer')];
              }
            }
          }, {
            loader: 'less-loader',
            options: {
              modifyVars: {
                "screenRatio": process.env.SCREEN_RATIO || 1
              }
            }
          }
        ])
      }
    ]
  },
  plugins: plugins,
  resolve: {
    enforceExtension: false,
    extensions: [
      '.js', '.json', '.less'
    ],
    alias: {
      'components': path.resolve(__dirname, 'app', 'components'),
      'reducers': path.resolve(__dirname, 'app', 'reducers'),
      'middlewares': path.resolve(__dirname, 'app', 'middlewares'),
      'actions': path.resolve(__dirname, 'app', 'actions'),
      'styles': path.resolve(__dirname, 'app', 'styles')
    }
  },
  devServer: {
    port: 9000,
    host: 'localhost',
    historyApiFallback: true,
    proxy: {
      'omg': {
        target: 'http://',
        secure: false
      }
    }
  }
};

module.exports = config;
