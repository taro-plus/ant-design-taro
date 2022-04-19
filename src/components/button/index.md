---
group:
 path: /
nav:
 title: 组件
 path: /components
---

# Button 按钮

## 使用示例
### 示例一

<code src="./demos/demo1.tsx"></code>

### 示例二

<code src="./demos/demo2.tsx"></code>

## 属性

| 属性          | 说明           | 类型                                                                                             | 默认值         |
|-------------|--------------|------------------------------------------------------------------------------------------------|-------------|
| color       | 按钮的颜色        | `'default'` &verbar; `'primary'` &verbar; `'success'` &verbar; `'warning'` &verbar; `'danger'` | `'default'` |
| fill        | 填充模式         | `'solid'` &verbar; `'outline'` &verbar; `'none'`                                               | `'solid'`   |
| size        | 大小           | `'mini'` &verbar; `'small'` &verbar; `'middle'` &verbar; `'large'`                             | `'middle'`  |
| block       | 是否是块级元素      | `boolean`                                                                                      | `false`     |
| disabled    | 是否禁用         | `boolean`                                                                                      | `false`     |
| loadingText | 加载状态下额外展示的文字 | `string`                                                                                       | -           |
| shape       | 按钮的形状        | `'default'` &verbar; `'rounded'` &verbar; `'rectangular'`                                      | `'default'` |

## CSS 变量

| 属性                 | 说明   | 默认值                       | 全局变量                            |
|--------------------|------|---------------------------|---------------------------------|
| --text-color       | 文字颜色 | `var(--adt-color-text)`   | `--adt-button-text-color`       |
| --background-color | 背景颜色 | `var(--adt-color-white)`  | `--adt-button-background-color` |
| --border-radius    | 圆角大小 | `8px`                     | `--adt-button-border-radius`    |
| --border-width     | 边框宽度 | `1px`                     | `--adt-button-border-width`     |
| --border-style     | 边框样式 | `solid`                   | `--adt-button-border-style`     |
| --border-color     | 边框颜色 | `var(--adt-border-color)` | `--adt-button-border-color`     |
