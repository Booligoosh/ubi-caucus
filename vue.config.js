module.exports = {
  pwa: {
    name: `UBI Caucus`,
    workboxOptions: {
      exclude: [`_redirects`, `_headers`]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("yaml-loader")
      .loader("yaml-loader")
      .end();
  }
};
