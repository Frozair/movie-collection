module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './js/index.jsx'
  },
  output: {
    path: __dirname + '/src/dist',
    filename: 'build.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
