const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.module.rules.delete('svg'); //重点:删除默认配置中处理svg,
    config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include
        .add(path.resolve('src/icons')) //处理svg目录
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
  },
  pluginOptions: {
    // 全局样式文件配置
    // 需要安装 style-resources-loader vue-cli-plugin-style-resources-loader 两个插件
    'style-resources-loader': {
      preProcessor: 'less',
      // less所在文件路径
      patterns: [path.resolve(__dirname, './src/styles/global.less')]
    }
  }
})
