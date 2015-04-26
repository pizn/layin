### Layin

另外一种写栅格化系统或者布局的方法。Layin 提供两种不同的布局方式，例如普通的（Float）浮动布局，还有（Flexbox）布局的支持。

##### 使用 Attribute 来替代 Class，实现栅格化一致的效果：

```html
<div row>
  <div col="3">
    <div demo-box="large">3</div>
  </div>
  <div col="4">
    <div demo-box>4</div>
  </div>
  <div col="5">
    <div demo-box>5</div>
  </div>
</div>
```

##### 通过 Attribute 的值来选择是否采用 Flexbox 布局方式:

```html
<div row="flex" row-align="center center">
  <div col="3" col-order="3">
    <div demo-box="large">3</div>
  </div>
  <div col="4" col-order="2">
    <div demo-box>4</div>
  </div>
  <div col="5" col-order="1">
    <div demo-box>5</div>
  </div>
</div>
```