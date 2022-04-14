---
group:
 path: /
nav:
 title: 组件
 path: /components
---

# Button 按钮

## 使用示例1

<code src="./demos/demo1.tsx"></code>

## 使用示例2

<code src="./demos/demo2.tsx"></code>

## 属性

| 属性          | 说明                        | 类型                                                                                   | 默认值         |
|-------------|---------------------------|--------------------------------------------------------------------------------------|-------------|
| color       | 按钮的颜色                     | 'default' &verbar; 'primary' &verbar; 'success' &verbar; 'warning' &verbar; 'danger' | `'default'` |
| fill        | 填充模式                      | 'solid' &verbar; 'outline' &verbar; 'none'                                           | `'solid'`   |
| size        | 大小                        | 'mini' &verbar; 'small' &verbar; 'middle' &verbar; 'large'                           | `'middle'`  |
| block       | 是否是块级元素                   | `boolean`                                                                            | `false`     |
| disabled    | 是否禁用                      | `boolean`                                                                            | `false`     |
| loading     | 是否处于加载状态                  | `boolean`                                                                            | `false`     |
| loadingText | 加载状态下额外展示的文字              | `string`                                                                             | -           |
| onClick     | 点击事件                      | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`                   | -           |
| type        | 原生 `button` 元素的 `type` 属性 | 'submit' &verbar; 'reset' &verbar; 'button'                                          | `'button'`  |
| shape       | 按钮的形状                     | 'default' &verbar; 'rounded' &verbar; 'rectangular'                                  | `'default'` |

## CSS 变量

| 属性                 | 说明   | 默认值                       | 全局变量                            |
|--------------------|------|---------------------------|---------------------------------|
| --text-color       | 文字颜色 | `var(--adm-color-text)`   | `--adm-button-text-color`       |
| --background-color | 背景颜色 | `var(--adm-color-white)`  | `--adm-button-background-color` |
| --border-radius    | 圆角大小 | `4px`                     | `--adm-button-border-radius`    |
| --border-width     | 边框宽度 | `1px`                     | `--adm-button-border-width`     |
| --border-style     | 边框样式 | `solid`                   | `--adm-button-border-style`     |
| --border-color     | 边框颜色 | `var(--adm-border-color)` | `--adm-button-border-color`     |
