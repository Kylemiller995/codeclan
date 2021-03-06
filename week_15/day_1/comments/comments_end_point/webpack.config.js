config = {
  entry: `${__dirname}/client/src/app.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/build`
  },
  devtool: "source-map",
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  }

}

module.exports = config;