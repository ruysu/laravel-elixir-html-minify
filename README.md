# Laravel Elixir HTML minify

This package allows you to minify static html files. This is useful when you are using static partials loaded through ajax, for example on an angular application.

## Installation

First you need to install this package.

```sh
npm install --save-dev laravel-elixir-html-minify
```

Then require this package into your `gulpfile.js`.

```js
var Elixir = require('laravel-elixir');
require('laravel-elixir-html-minify');
```

Then call the `html` method from your mix.

The `html` method can take up to four arguments:

  1. `src` (required): The files to minify.
  2. `outputPath` (optional): The output folder (defaults to `public/html`).
  3. `baseDir` (optional): The folder in which your html files are stored (defaults to `resources/assets/html`).
  4. `options` (optional):  Options object passed to the `gulp-html-minify` task.

This task defines a watcher for the path defined in `src`.

Sample code:

```js
Elixir(function(mix) {
    mix.html('**/*.html', 'public/html', 'resources/assets/html', {quotes: true, loose: true, empty: true});
});
```