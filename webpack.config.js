const path = require('path');
const APP_DIR = path.resolve(__dirname, 'app');

let output = {
  filename: 'bundle.js'
};

let plugins = [];

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
      'actions': path.resolve(__dirname, 'app', 'actions')
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
