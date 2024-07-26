const { defineConfig } = require('@vue/cli-service')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const MiniProgramTailwindWebpackPlugin = require('@dcasia/mini-program-tailwind-webpack-plugin')

module.exports = defineConfig({
  outputDir: `dist/${process.env.MPX_CURRENT_TARGET_MODE}`,
  pluginOptions: {
    mpx: {
      srcMode: 'wx',
      plugin: {
        hackResolveBuildDependencies: ({ files, resolveDependencies }) => {
          const path = require('path')
          const packageJSONPath = path.resolve('package.json')
          if (files.has(packageJSONPath)) files.delete(packageJSONPath)
          if (resolveDependencies.files.has(packageJSONPath)) {
            resolveDependencies.files.delete(packageJSONPath)
          }
        }
      },
      loader: {}
    }
  },
  /**
   * 如果希望node_modules下的文件时对应的缓存可以失效，
   * 可以将configureWebpack.snap.managedPaths修改为 []
   */
  configureWebpack(config) {
    return {
      plugins: [
        new WindiCSSWebpackPlugin(),
        new MiniProgramTailwindWebpackPlugin({
          // options
        })
      ]
    }
  }
})
