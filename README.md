### Layin

另外一种写栅格化系统或者布局的方法。Layin 提供两种不同的布局方式，例如普通的（float）浮动布局，还有（flexbox）布局的支持。

最终实现和其他栅格化一致的效果，但这里先看代码：

```html

<div row>
	<div col="3">
		<div demo-box>3</div>
	</div>
	<div col="4">
		<div demo-box>3</div>
	</div>
	<div col="5">
		<div demo-box>3</div>
	</div>
</div>