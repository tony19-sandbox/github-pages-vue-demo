> Demo of Vue on GitHub pages with `vue-gh-pages`

https://stackoverflow.com/q/61706449/6277151

When using [`vue-gh-pages`](https://github.com/KieferSivitz/vue-gh-pages) to deploy a Vue CLI project to GitHub pages, the hosted site does not render, and results in `404`s despite properly configuring `publicPath` as recommended in [Vue CLI docs](https://cli.vuejs.org/guide/deployment.html#github-pages).

The problem is caused by `vue-gh-pages` [removing the leading slashes from `src/href` URLs](https://github.com/KieferSivitz/vue-gh-pages/blob/8fa4174/index.js#L80) in `index.html`. This project demonstrates a workaround. Specifically, it patches `vue-gh-pages` to disable the slash removal, allowing the Vue app to run on GitHub pages.

Note the [patch](https://github.com/tony19-sandbox/github-pages-vue-demo/blob/3b2a93d/patches/vue-gh-pages%2B1.19.0.patch) is automatically applied by [`patch-package`](https://github.com/ds300/patch-package) during post-install.

*Environment:*

 - `vue` 2.6.11
 - `vue-gh-pages` 1.19.0
 - `@vue/cli` 4.3.1
 - macOS Catalina 10.15.4
