import mpx, { createApp } from '@mpxjs/core'
import apiProxy from '@mpxjs/api-proxy'
import { CDN_HOST } from './config'

mpx.use(apiProxy, { usePromise: true })

createApp({
  onLaunch() {
    //
  }
})
