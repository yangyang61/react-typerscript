/**
 * 非eject方式暴露webpack配置
 * 使用customize-cra自定义webpack配置
 */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') //分析插件，打包后在build/static/report.html中展示各模块所占的大小

const { override, addWebpackAlias, addBabelPlugin, addWebpackPlugin } = require('customize-cra')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');


const path = require('path')
const resolve = dir => path.join(__dirname, dir)


const analyze = process.env.REACT_APP_ENV === 'production' //是否分析打包数据
console.log('-----当前运行环境-----：', process.env.REACT_APP_ENV);
module.exports = override(
  // antd css 按需加载
  addBabelPlugin([
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    },
  ]),
  /* 别名设置 */
  addWebpackAlias({
    '@/': resolve('src'),
    '@/components': resolve('./src/components'),
    '@/utils': resolve('./src/utils'),
    '@/pages': resolve('./src/pages'),
    '@/store': resolve('./src/store'),
    '@/api': resolve('./src/api'),
    '@/router': resolve('./src/router'),
    '@/assets': resolve('./src/assets'),
    '@/reducer': resolve('./src/reducer'),
    '@/action': resolve('./src/action'),
    '@/constants': resolve('./src/constants'),
    '@/config': resolve('./src/config')
  }),
  analyze
    ? addWebpackPlugin(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static' //输出静态报告文件report.html，而不是启动一个web服务
      })
    )
    : undefined,
  // 注意是production环境启动该plugin
  analyze && addWebpackPlugin(
    new UglifyJsPlugin({
      // 开启打包缓存
      cache: true,
      // 开启多线程打包
      parallel: true,
      uglifyOptions: {
        // 删除警告
        warnings: false,
        // 压缩
        compress: {
          // 移除console
          drop_console: true,
          // 移除debugger
          drop_debugger: true
        }
      }
    })
  ),
  addWebpackPlugin(
    new AntdDayjsWebpackPlugin()
  )
)
