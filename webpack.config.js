module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.[hash].js'
  },
  devServer: {
    port: 7890
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true
          }
        }
      }
    ]
  }
};
