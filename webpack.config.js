const HtmlPlugin = require('html-webpack-plugin');
//takes the template html and create for us
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js'
    //change this name on every build
  },
  devServer: {
    port: 7890
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
    new CleanPlugin('./dist')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
          loader: 'style-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            importLoaders: 1
        }
      },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
                require('postcss-nested')()
              ]
            }
          }
        ]
      }
    ]
  }
};