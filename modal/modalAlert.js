// component/modalAlert/modalAlert.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    expectSlot: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    animationData: {}
  },
  /**
   * 组件的方法列表
   */
  methods: {
    hideModal: function (e) {
      var that = this;

      console.log(e);

      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease',
      })

      this.animation = animation;

      animation.height(0).step();

      this.setData({
        animationData: animation.export()
      })



      setTimeout(function () {
        var modalEventData = {};
        var modalEventOption = {};
        that.triggerEvent('hide', modalEventData, modalEventOption);
      }, 200)

    },
    doNothing: function () {

    }
  },

  created: function () {
  },
  attached: function () {
  },
  ready: function () {
    var that = this;

    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease',
      })

      that.animation = animation;

      animation.height('85%').step();

      that.setData({
        animationData: animation.export()
      })
    }, 100)
  },
  detached: function () {
    console.log('detached');

  }
})
