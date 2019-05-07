# Installing pHTML CSS

[pHTML CSS] runs in all Node environments, with special instructions for:

| [Node](#node) | [CLI](#phtml-cli) | [Eleventy](#eleventy) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- |

## Node

Add [pHTML CSS] to your project:

```bash
npm install @phtmlorg/css --save-dev
```

Use [pHTML CSS] to process your HTML:

```js
const phtmlCss = require('@phtmlorg/css')

phtmlCss.process(YOUR_HTML /*, processOptions, pluginOptions */)
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml')
const phtmlCss = require('@phtmlorg/css')

phtml([
  phtmlCss(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */)
```

## CLI

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtmlorg/css
```

Alternatively, add [pHTML CSS] to your `phtml.config.js` configuration file:

```js
module.exports = {
  plugins: [
    ['@phtmlorg/css', /* pluginOptions */]
  ]
}
```

## Eleventy

Add [pHTML Eleventy] and [pHTML CSS] to your Eleventy project:

```sh
npm install @phtmlorg/css @phtml/11ty --save-dev
```

Use [pHTML Eleventy] and [pHTML CSS] in your Eleventy configuration:

```js
const phtml11ty = require('@phtml/11ty')
const phtmlCss = require('@phtmlorg/css')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    use: [
      phtmlCss(/* pluginOptions */)
    ]
  })
}
```

## Gulp

Add [Gulp pHTML] and [pHTML CSS] to your project:

```bash
npm install @phtmlorg/css gulp-phtml --save-dev
```

Use [Gulp pHTML] and [pHTML CSS] in your Gulpfile:

```js
const gulp = require('gulp')
const gulpPhtml = require('gulp-phtml')
const phtmlCss = require('@phtmlorg/css')

gulp.task('html',
  () => gulp.src('./src/*.html').pipe(
    gulpPhtml({
      plugins: [
        phtmlCss(/* pluginOptions */)
      ]
    })
  ).pipe(
    gulp.dest('dist')
  )
)
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [Grunt pHTML] and [pHTML CSS] in your Gruntfile:

```js
const phtmlCss = require('@phtmlorg/css')

grunt.loadNpmTasks('grunt-phtml')

grunt.initConfig({
  phtml: {
    options: {
      plugins: [
        phtmlCss(/* pluginOptions */)
      ]
    },
    dist: {
      files: [{
        expand: true,
        src: 'src/*.html',
        dest: 'dest'
      }]
    }
  }
})
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Eleventy]: https://github.com/phtmlorg/phtml-11ty
[pHTML CSS]: https://github.com/phtmlorg/phtml-css
