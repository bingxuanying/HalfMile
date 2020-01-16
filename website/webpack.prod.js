const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  output: {
    // prevent caching
    filename: "bundle.[contentHash].js",
    path: path.resolve(__dirname, "build")
  }
});
