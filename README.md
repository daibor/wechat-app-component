微信小程序组件
===
自己平时做小程序造的一些小组件，没什么技术含量:blush:
## 目录
- [Capsule 两栏切换（胶囊）](##Capsule胶囊切换)
- [Modal 模态弹窗](##Modal模态弹窗)

## 基本使用
以下组件使用，默认都需要在引入组件页面对应的JSON文件中配置自定义组件，例如
```json
{
  "usingComponents": {
    "capsule": "/component/capsule/capsule"
  }
}
```

可参考[微信官方教程](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)

## Capsule胶囊切换
![胶囊展示](https://i.loli.net/2018/03/16/5aabbec47f0d0.gif)

### Usage
直接在页面的WXML中复制粘贴以下代码引入组件，两个view标签内部可插入或替换为内部展示页需要的元素。
### Attribute
| AttrName  |    Type   |   Description   |
| :-------- | :--------:| :------: |
| leftSec    |   *String* |  左侧文字  |
| rightSec   |   *String* |  右侧文字  |

**HTML**
```html
<capsule leftSec='左标签名' rightSec='右标签名' >
<view slot='left'></view>
<view slot='right'></view>
</capsule>
```

## ListBar多功能列表控件
例如微信发现页的列表组件

## foldBar折叠bar组件
提供了旋转左侧icon（例如箭头指向）在内的多种选择

## Modal模态弹窗
![模态展示](https://i.loli.net/2018/04/02/5ac210fcdd633.gif)

点击灰色部分收回，白色部分设置了一个不冒泡的空事件函数。

### Usage
在页面以下文件中引入组件，HTML文件自定义标签内部可插入不限量带`slot`标签的元素，这样在一个页面中就可以复用模态组件了，根据在需要弹窗的元素上设定的`data-slotName`值决定渲染`<modalAlert></modalAlert>`标签内哪一部分到弹窗内。
**HTML**
```html
<modalAlert wx:if="{{modalControl}}" bind:hide="controlModal" expectSlot="{{expectSlot}}">
<view slot="invite">invite</view> 
<view slot="vote">vote</view> 
</modalAlert>

<button bindtap="controlModal" data-slotName="invite">弹出模态窗口</button>
```
**JS**
```javascript
Page({

  data: {
    modalControl:false,
    expectSlot: ''
    },

    controlModal: function (e) {
      console.log(e.currentTarget.dataset.slotname);
      if(!this.data.modalControl){
        this.setData({
          expectSlot: e.currentTarget.dataset.slotname,
          })
      }
        this.setData({
          modalControl: !this.data.modalControl
        })
    }

        /*省略*/
})
        ```