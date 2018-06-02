// Component/foldBar/foldBar.js
var areaAni,arrowAni;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listIcon: {
      type: String,
      value: ''
    },
    listText: {
      type: String,
      value: ''
    },
    rightIcon: {
      type: String,
      value: '/Images/icon/arrow-right.png'
    },
    rotateAngle: {
      type: String,
      value: '90'
    },
    noleftIcon: {
      type: Boolean,
      value: false
    },
    //默认为打开状态，如果需要默认折叠，设置defaultFold属性
    defaultFold: {
      type: Boolean,
      value: false
    }
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
  //
  attached: function () {

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
        arrowAni.rotateZ(that.data.rotateAngle).step();
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
    const that = this;
    var areaAniTemp = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out',
    });
    var arrowAniTemp = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-out',
    })

    areaAni = areaAniTemp,arrowAni = arrowAniTemp;

    that.setData({
      'foldData.isFold': that.data.defaultFold,
      'foldData.areaAni': areaAni.export(),
      'foldData.arrowAni': arrowAni.export()
    })
  },
})
