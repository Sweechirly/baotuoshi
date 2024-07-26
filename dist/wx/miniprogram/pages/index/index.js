
var self = self || {};

self["webpackChunkbaotuoshi"] = require("../../bundle.js");
(self["webpackChunkbaotuoshi"] = self["webpackChunkbaotuoshi"] || []).push([[2],{

/***/ 530:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__.g.currentModuleId = "m321f15d9"
__webpack_require__.g.currentResource = "/Users/xinxuetao/sensetime/study/baotuoshi/src/miniprogram/pages/index/index.mpx"
__webpack_require__.g.currentCtor = Component
__webpack_require__.g.currentCtorType = "component"
__webpack_require__.g.currentResourceType = "page"
/* template */
__webpack_require__(531)
/* styles */
__webpack_require__(532)
/* json */
__webpack_require__(533)
/* script */
__webpack_require__.g.currentSrcMode = "wx"
__webpack_require__(534)


/***/ }),

/***/ 534:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(505);

(0,_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["default"])({
  onLoad: function onLoad() {
    //
    // wx.downloadFile({
    //   url: './bg.jpg',
    //   success: (res) => {
    //     console.log(res)
    //     wx.showShareImageMenu({
    //       path: res.tempFilePath
    //     })
    //   },
    //   fail: (res) => {
    //     console.log(res)
    //   }
    // })
  },
  onReady: function onReady() {
    var query = wx.createSelectorQuery();
    query.select('#myCanvas').fields({
      node: true,
      size: true
    }).exec(function (res) {
      var canvas = res[0].node;
      var ctx = canvas.getContext('2d');
      wx.getImageInfo({
        src: 'https://wxmarketurl-1258344699.cos.ap-guangzhou.myqcloud.com/1254418846/o1sbG5XaCV4XqkKV67UGAXy4t57g/596d6bb0-1507-4cfa-98c1-75b1c83c8082',
        success: function success(res) {
          console.log(res);
          var width = res.width,
            height = res.height,
            path = res.path;
          canvas.width = 300;
          canvas.height = 300 * height / width;
          // img.onload = (e) => {
          //   ctx.drawImage(img, 0, 0, 60, imgHeight 60);
          //   const imageData = ctx.getImageData(0, 0, 60, 60);
          // }
          // ctx.drawImage(path, 0, 0)
          var image = canvas.createImage();
          // 图片加载完成回调
          image.onload = function () {
            // 将图片绘制到 canvas 上
            ctx.drawImage(image, 0, 0);
          };
          // 设置图片src
          image.src = path;
          // })
        }
      });
      // ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
      // const dpr = wx.getSystemInfoSync().pixelRatio
      // canvas.width = res[0].width * dpr
      // canvas.height = res[0].height * dpr
      // ctx.scale(dpr, dpr)
      // ctx.fillRect(0, 0, 100, 100)
    });
  },

  methods: {
    fuck: function fuck() {
      // wx.chooseMedia({
      //   count: 9,
      //   mediaType: ['image'],
      //   sourceType: ['album', 'camera'],
      //   sizeType: ['compressed']
      // })
      //   .then((res) => {
      //     const str = wx
      //       .getFileSystemManager()
      //       .readFileSync(res.tempFiles[0].tempFilePath, 'base64')
      //     console.log(str)
      //     // @ts-ignore
      //     return wx.serviceMarket.invokeService({
      //       service: 'wx1d59f48128f45869',
      //       api: 'segmentPortraitPic',
      //       data: {
      //         Action: 'SegmentPortraitPic',
      //         Url: 'https://img2.baidu.com/it/u=2044335905,1934046471&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
      //       }
      //     })
      //   })
      //   .then((res) => {
      //     console.log('invokeService success', res)
      //   })
      //   .catch(console.log)
      // @ts-ignore
      // wx.serviceMarket
      //   .invokeService({
      //     service: 'wx2d1fd8562c42cebb',
      //     api: 'segmentPortraitPic',
      //     data: {
      //       Action: 'SegmentPortraitPic',
      //       Url: 'https://img.zcool.cn/community/01ba635c7aa5dea801203d2202fbea.jpg@2o.jpg'
      //     }
      //   })
      //   .then((res) => {
      //     console.log(res.data.ResultImageUrl)
      //     console.log(res.data.ResultMaskUrl)
      //   })
      //   .catch((err) => {
      //     console.error('invokeService fail', err)
      //   })
    }
  }
});

/***/ }),

/***/ 531:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__.g.currentInject = {
  moduleId: "m321f15d9",
  render: function () {
    this._r();
  }
};


/***/ }),

/***/ 532:
/***/ (function() {



/***/ }),

/***/ 533:
/***/ (function() {



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(530));
/******/ }
]);
//# sourceMappingURL=index.js.map