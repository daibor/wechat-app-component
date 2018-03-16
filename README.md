#微信小程序组件
平时做小程序造的一些小组件
##Capsule 胶囊切换
![展示](https://i.loli.net/2018/03/16/5aabbec47f0d0.gif)
###Usage
在需要引入的页面对应的JSON文件中，添加

	"usingComponents": {
    	"capsule": "/component/capsule/capsule"
  	}

直接在页面的WXML中复制粘贴以下代码引入组件，两个view标签内部可插入或替换为内部展示页需要的元素。

	&ltcapsule leftSec='左标签名' rightSec='右标签名' &gt
		&ltview slot='left'&gt&lt/view&gt
		&ltview slot='right'&gt&lt/view&gt
	&lt/capsule&gt

