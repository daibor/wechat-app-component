// Component/listBar/listBar.js
var areaAni, arrowAni;

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    foldBar: {
      type: Boolean,
      value: false
    },
    //默认为打开状态，如果需要默认折叠，设置defaultFold属性
    defaultFold: {
      type: Boolean,
      value: false
    },
    listtype: {
      type: String,
      value: 'listBar-idp'
    },
    isleftrow: {
      type: Boolean,
      value: false
    },
    lefticon: {
      type: String,
      value: ''
    },
    leftmain: {
      type: String,
      value: ''
    },
    lefttip: {
      type: String,
      value: ''
    },
    leftrow: {
      type: String,
      value: ''
    },
    righticon: {
      type: String,
      value: ''
    },
    rightmain: {
      type: String,
      value: ''
    },
    nolefticon: {
      type: Boolean,
      value: false
    },
    norighticon: {
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    foldData: {
      isFold: false,
      tipGesture: '/images/noresult.png',
      areaAni: {},
      arrowAni: {}
    },
    defaultCSS: {
      arr: 'default-unfold-arr',
      ctn: 'default-unfold-ctn'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapFoldbar: function (e) {
      const that = this;

      let foldData = that.data.foldData;

      console.log(foldData.isFold)

      if (foldData.isFold) {
        areaAni.height('auto').opacity(1).step();
        arrowAni.rotateZ(90).step();
        that.setData({
          'foldData.isFold': false,
          'foldData.areaAni': areaAni.export(),
          'foldData.arrowAni': arrowAni.export()
        })
      } else {
        areaAni.height(0).opacity(0).step();
        arrowAni.rotateZ(0).step();
        that.setData({
          'foldData.isFold': true,
          'foldData.areaAni': areaAni.export(),
          'foldData.arrowAni': arrowAni.export()
        })
      }
    }
  },

  ready: function () {
    var that = this;
    var areaAniTemp = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out',
    });
    var arrowAniTemp = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out',
    })

    areaAni = areaAniTemp, arrowAni = arrowAniTemp;

    if (this.data.defaultFold) {
      that.setData({
        'defaultCSS.ctn': 'default-fold-ctn',
        'defaultCSS.arr': 'default-fold-arr',
        'foldData.isFold': true,
      })
    } else {
      that.setData({
        'defaultCSS.ctn': 'default-unfold-ctn',
        'defaultCSS.arr': 'default-unfold-arr',
        'foldData.isFold': false,
      })
    }

    that.setData({
      'foldData.areaAni': areaAni.export(),
      'foldData.arrowAni': arrowAni.export()
    })
  },
})
