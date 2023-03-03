const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

require("dotenv").config();

const { PORT: port, NODE_ENV: mode } = process.env;

const devServer = {
  port,
  open: false,
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "octacore",
    projectName: "common",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer,
  });
};
