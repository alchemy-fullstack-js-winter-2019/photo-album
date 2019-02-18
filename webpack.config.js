
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presents: ['@babel/preset-env'],
            cacheDirectory:true
          }
        }
      }
    ]
  }
}; //entry point to our application