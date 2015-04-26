### Layin

另外一种写栅格化系统或者布局的方法。Layin 提供两种不同的布局方式，例如普通的（Float）浮动布局，还有（Flexbox）布局的支持。

#### 介绍

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

##### 栅格化细节

* 支持 12 栏，且不设置每一行的左右边距
* 支持 Flex 布局，在 Flex 布局情况下，可以使用 Order 进行排序
* 普通布局支持 Offset/Pull/Push

参数概览：

| 属性 | 值 | 解释 |
| --- | --- | --- |
| row | null/flex |  |
| row-align | start/center/end etc | 对齐方式  |
| col | 1 ~ 12 | 一列，共12列 | 
| col-order | 1 ~ 12 | row 需要为 flex | 
| col-offset | 1 ~ 12 | | 
| col-pull | 1 ~ 12 | | 
| col-push | 1 ~ 12  | | 