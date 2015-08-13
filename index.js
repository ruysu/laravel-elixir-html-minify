var gulp         = require('gulp');
var elixir       = require('laravel-elixir');
var minify       = require('gulp-minify-html');
var config       = elixir.config;

/**
 * Minify static html pages, useful when using html partials loaded though ajax
 * @param  {string}        src        The files to minify
 * @param  {string|object} outputPath The output path, or an options object
 * @param  {string|object} baseDir    The dir in wich to look for html files, or an options object
 * @param  {object}        options    The options object passed to the minify task
 */
elixir.extend('html', function(src, outputPath, baseDir, options) {
    // If the options object was provided on the outputPath parameter
    if (typeof outputPath == 'object') {
        options = outputPath;
        outputPath = null;
    }

    // If the options object was provided on the baseDir parameter
    if (typeof baseDir == 'object') {
        options = baseDir;
        baseDir = null;
    }

    // Parse the source and output paths
    var paths = new elixir.GulpPaths()
        .src(src, baseDir || config.assetsPath + '/html')
        .output(outputPath || config.publicPath + '/html');

    options = typeof options == 'undefined' ? {} : options;

    new elixir.Task('minify', function() {
        var minifyOptions = options;

        return gulp.src(paths.src.path)
            .pipe(minify(minifyOptions))
            .pipe(gulp.dest(paths.output.path))
            .pipe(new elixir.Notification().message('Minified!'));
    })
    // Register watcher for source path
    .watch(paths.src.path);

});
