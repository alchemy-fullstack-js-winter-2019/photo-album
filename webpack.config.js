module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.b?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};


