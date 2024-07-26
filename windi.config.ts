export default {
  preflight: false,
  prefixer: false,
  extract: {
    // 将 .mpx 文件纳入范围（其余 Webpack 类小程序根据项目本身的文件后缀酌情设置）
    include: ['src/**/*.{css,html,mpx}'],
    // 忽略部分文件夹
    exclude: ['node_modules', '.git', 'dist']
  },
  corePlugins: {
    // 禁用掉在小程序环境中不可能用到的 plugins
    container: false
  },
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      '#fff': '#fff'
    }),
    textColor: {
      danger: '#e3342f'
    },
    borderColor: {},
    borderRadius: {},
    blur: {}
  }
}
