const path = require('path')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer'),

]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    // contentBase: path.join(__dirname, 'app'),
    // before: function(app, server) {
    //   server._watch('./app/**/*.html')
    // },
    static: {
      directory: path.join(__dirname, 'app')
    },
    hot: "only",
    port: 3000,
    host: '0.0.0.0'
  },
  mode: 'development',
  // watch: true, // Since the devServer now takes care of the reloading the changes on the fly the watch option is not required
  module: {
    rules: [
      {
        test: /\.css$/i, 
        use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
      }
    ]
  }
}