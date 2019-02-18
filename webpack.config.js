module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js'
  }
};

{
  [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          cacheDirectory: true
        }
      }
    },
    {
      test: /\.css$/
    }
  ];
}

