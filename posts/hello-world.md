---
title: HelloWorld
date: 2025-07-30
tags: [HelloWorld, vue, vitepress]
pinned: false
head:
  - - meta
    - name: description
      content: vitepress-theme-bluearchive HelloWorld
  - - meta
    - name: keywords
      content: vitepress theme bluearchive HelloWorld
---
只是一个 HelloWorld

---

# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## LaTex Code Test
$\frac{2}{3} \times \frac{3}{2} = 1$

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
