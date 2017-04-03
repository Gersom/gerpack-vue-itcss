# Gerpack Vue Itcss

> <strong>gerpack-vue-itcss</strong> is a modern Vue.js starter<br>
> which uses Vue 2, Vuex, Vue-router and Webpack 2.


## Features

- [Vue 2](https://vuejs.org) / Vue-router / Vuex
- Hot reloading for single-file components
- Split vendor code from your app
- [Webpack 2](https://webpack.js.org)
- ESLint
- Babel 6
- PostCSS
- [Itcss](http://csswizardry.net/talks/2014/11/itcss-dafed.pdf)
- A boilerplate which is small and focusing on client-side apps

## Get Started

You'd better have `node >=4` and `npm >=3` installed:

## vue-cli

```bash
$ npm install -g vue-cli
$ vue init gersom/gerpack-vue-itcss {name-project}
$ cd {name-project}
$ npm install

# edit files and start developing
$ npm run dev
# bundle all scripts and styles for production use
$ npm run build
# lint your code
$ npm run lint
```


## Folder Structure

The destination folder is `./dist`


```bash
├── src
│    ├──app                 # the application's container folder
│    │   ├──config          # configuration of libraries of vue
│    │   │    ├──store      # vuex files
│    │   │    ├──routes.js  # routes specifications
│    │   │    └──vue-router.js  # vue-router specifications
│    │   ├──screens         # views of the application
│    │   ├──shared          # generic directory from app
│    │   └──index.js        # configuration of vue
│    ├──assets              # dynamic assets (processed by webpack)
│    ├──styles              # structure Itcss with stylus & sass
│    └──main.js             # entry file for webpack
└──[...other folders]  
```

## Custom template

You want to customize the output of `index.html`, simply modify [index.html](/template/index.html), see more at [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin).

## License

MIT &copy; [Gersom](https://github.com/Gersom)
