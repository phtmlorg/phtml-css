# pHTML CSS [<img src="https://phtmlorg.github.io/phtml/logo.svg" alt="pHTML" width="90" height="90" align="right">][phtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[pHTML CSS] lets you transform inline CSS in HTML.

```html
<style>p { margin-block: 0; }</style>

<p style="margin-block: 0;"></p>

<!-- becomes (when processed with postcss-preset-env) -->

<style>p { margin-left: 0; margin-right: 0; }</style>

<p style="margin-left: 0; margin-right: 0;"></p>
```

## Usage

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtml/css
```

### Node

Add [pHTML CSS] to your project:

```bash
npm install @phtml/css --save-dev
```

Use [pHTML CSS] to process your HTML:

```js
const phtmlCss = require('@phtml/css');

phtmlCss.process(YOUR_HTML /*, processOptions, pluginOptions */);
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml');
const phtmlCss = require('@phtml/css');

phtml([
  phtmlCss(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */);
```

[pHTML CSS] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [pHTML CLI](INSTALL.md#phtml-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

### plugins

The `plugins` option defines the plugins applied to PostCSS.

```js
phtmlCss({
  plugins: require('postcss-preset-env')({
    stage: 0
  })
})
```

### processOptions

The `processOptions` option defines the process options provided to PostCSS. By
default, these options enable sourcemaps. You can disable them by passing in an
empty object.

```js
phtmlCss({
  processOptions: {}
})
```

[cli-img]: https://img.shields.io/travis/phtmlorg/phtml-css.svg
[cli-url]: https://travis-ci.org/phtmlorg/phtml-css
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/@phtml/css.svg
[npm-url]: https://www.npmjs.com/package/@phtml/css

[pHTML]: https://github.com/phtmlorg/phtml
[pHTML CSS]: https://github.com/phtmlorg/phtml-css
