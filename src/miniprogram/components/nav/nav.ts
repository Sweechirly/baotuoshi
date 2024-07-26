import { createComponent } from '@mpxjs/core'

createComponent({
  data: {
    canBack: true,
    navStyle: {
      width: 0,
      height: 0,
      marginTop: 20,
      marginBottom: 20
    },
    pixelRatio: 2,
    isIos: false
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    theme: {
      type: String,
      value: 'dark'
    },
    color: {
      type: String,
      value: ''
    }
  },
  lifetimes: {
    created() {
      const pages = getCurrentPages()
      if (pages.length > 1) {
        this.setData({
          canBack: true
        })
      }
      const systemInfo = wx.getSystemInfoSync()
      const menuInfo = wx.getMenuButtonBoundingClientRect()

      const navStyle = {
        width: menuInfo.left - (systemInfo.windowWidth - menuInfo.right),
        height: menuInfo.height,
        marginTop:
          systemInfo.statusBarHeight +
          menuInfo.top -
          systemInfo.statusBarHeight,
        marginBottom: menuInfo.top - systemInfo.statusBarHeight
      }

      // console.log('app', systemInfo)

      const pixelRatio = Math.min(3, systemInfo.pixelRatio)
      const isIos = systemInfo.platform === 'ios'
      this.setData({
        navStyle,
        isIos,
        pixelRatio
      })
    }
  }
})
