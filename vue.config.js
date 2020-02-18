const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  pwa: {
    name:
      process.env.URL === `https://support.us.openubiproject.org`
        ? `Candidates supporting Universal Basic Income`
        : `UBI Caucus`,
    themeColor: `#243665`,
    manifestOptions: {
      short_name:
        process.env.URL === `https://support.us.openubiproject.org`
          ? `UBI Candidates`
          : `UBI Caucus`,
      background_color: `#243665`
    },
    workboxOptions: {
      exclude: [`_redirects`, `_headers`],
      // https://forum.vuejs.org/t/vue-cli-3-project-with-pwa-not-busting-cache-on-new-builds/50252/7
      skipWaiting: true,
      clientsClaim: true
    }
  },
  devServer: {
    port: 2024
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: `static`,
        reportFilename: `bundleAnalyzer.html`,
        openAnalyzer: false
      })
    ]
  }
};
