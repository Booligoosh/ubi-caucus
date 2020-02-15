module.exports = {
  pwa: {
    name: `UBI Caucus`,
    workboxOptions: {
      exclude: [`_redirects`, `_headers`],
      // https://forum.vuejs.org/t/vue-cli-3-project-with-pwa-not-busting-cache-on-new-builds/50252/7
      skipWaiting: true,
      clientsClaim: true
    }
  },
  chainWebpack: config => {
    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("yaml-loader")
      .loader("yaml-loader")
      .end();
  },
  devServer: {
    port: 2024
  }
};
