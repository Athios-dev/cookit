// https://github.com/gulpjs/gulp
var gulp = require('gulp');
// https://github.com/sindresorhus/gulp-autoprefixer
var autoprefixer = require('gulp-autoprefixer');
// https://www.npmjs.com/package/gulp-babel
var babel = require('gulp-babel');
// https://github.com/hparra/gulp-rename
var rename = require('gulp-rename');
// https://github.com/dlmanning/gulp-sass
var sass = require('gulp-sass');
// https://github.com/jakubpawlowicz/clean-css
var cleanCSS = require('gulp-clean-css');
// https://github.com/terinjokes/gulp-uglify/
var uglify = require('gulp-uglify');

// 📁 PATHS
var paths = {
    inputs: {
        css: './src/scss/**/*.scss',
        js: './src/js/**/*.js'
    },
    outputs: {
        css: 'public/css/',
        js: 'public/js/'
    }
}

// ⚙️ WORKFLOW CSS
function workflowCSS() {
    return gulp.src(paths.inputs.css)
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8', debug: true}, (details) => {
            console.log(`${details.name}: ${ Math.round(100 - details.stats.minifiedSize / details.stats.originalSize * 100) }% compressed (${ details.stats.originalSize / 1000 }Ko --> ${ details.stats.minifiedSize / 1000 }Ko)`);
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.outputs.css));
}

// ⚙️ WORKFLOW CSS
function workflowJS() {
    return gulp.src(paths.inputs.js)
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.outputs.js));
}

// 👀 WATCHING CHANGES
exports.default = function() {
    gulp.watch('./src/scss/**/*.scss', workflowCSS);
    gulp.watch('./src/js/**/*.js', workflowJS);
};