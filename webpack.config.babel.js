import path from 'path';

const config = {
  entry: {
    js: './public/app-client.js',
  },
  output: {
    path: path.join(__dirname, 'public', 'static', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'public'),
        use: {
          loader: 'babel-loader',
          // options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
  plugins: [],
};

export default config;
