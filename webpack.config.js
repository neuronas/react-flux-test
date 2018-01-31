const webpack = require("webpack");
const path = require("path");

const config = {
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, "app/App.js"),
  output: {
    path: path.resolve(__dirname, "public/js/"),
    publicPath: "/js/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        query: {
          presets: ["env", "react", "stage-0"]
        }
      },
      {
        test: /\.css$/, use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    compress: true
  }
};

if (process.env.NODE_ENV === "production") {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({ comments: false }),
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify("production") }
    })
  ];
}

module.exports = config;
