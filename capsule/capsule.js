// component/capsuleSel/capsuleSel.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    leftSec: {
      type: String,
      value: ''
    },
    rightSec: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showControlData: {
      isLeftSelected: true
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTaptab: function (e) {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption);
      console.log(e);
      if (e.target.dataset.side == 'left') {
        this.setData({
          'showControlData.isLeftSelected': true
        })
      } else {
        this.setData({
          'showControlData.isLeftSelected': false
        })
      }
    }
  }
})
