const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 设置获取.js,.css文件时，是以相对地址为基准来进行打包的
  publicPath: './',
  transpileDependencies: true
})
