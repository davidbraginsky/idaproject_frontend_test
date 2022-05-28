const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles.scss";',
      },
    },
  },
  configureWebpack: {
    devtool: "source-map",
  },
  publicPath: process.env.NODE_ENV === "production" ? "/idaproject_frontend_test/" : "/",
});
