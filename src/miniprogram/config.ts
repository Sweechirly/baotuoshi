const env = wx.getAccountInfoSync().miniProgram.envVersion
// const env = 'release'
const CLOUD_ENV =
  env === 'release' ? 'prod-7g8mkcvb4ba6a5d1' : 'dev-5gl7nsh68649f789' // dev环境

const CDN_ENV = env === 'release' ? 'prod' : 'dev'
const CDN_HOST = `https://mars-static-cdn.sensetime.com/${CDN_ENV}/yhd-marker`

export { CLOUD_ENV, CDN_HOST }
