---
group:
    path: /
nav:
    title: 组件
    path: /components
---

# Icon 图标

## 图标列表
<code src="./demos/demo1.tsx" ></code>

## 使用示例
<code src="./demos/demo2.tsx" ></code>

## 属性
| 参数       | 说明   | 类型                     | 是否必填 | 默认值 |
|----------|------|------------------------|------|-----|
| name     | 图标名称 | string                 | 是    | ''  |
| fontSize | 图标大小 | number &verbar; string | 否    | -   |
| color    | 图标颜色 | string                 | 否    | -   |

## CSS 变量
| 属性           | 说明   | 默认值                         | 全局变量               |
|--------------|------|-----------------------------|--------------------|
| --font-size  | 图标大小 | `var(--adt-font-size-main)` | `--adt-icon-size`  |
| --text-color | 图标颜色 | `var(--adt-color-text)`     | `--adt-icon-color` |

