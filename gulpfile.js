
var projectName = "wesk";

/* dependencies */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    templateCache = require('gulp-angular-templatecache'),
    del = require('del');

/* paths catalog */
var paths = {
    src: {
        js: ['./src/js/*.js'],
        sass: ['./src/sass/*.scss'],
        templates: ['./src/templates/*.html']
    },
    build: {
        /* locations of generated files */
        dir: './build'

    },
    vendorjs: [
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/build/angular-ui-router.js',
        'node_modules/angular-ui-router-title/angular-ui-router-title.js'
    ],
};

/* names of generated files */
var fNames = {
        minjs: projectName + 'min.js',
        js: projectName + '.js',
        vendorjs: 'vendor.js',
        templates: 'templates.js',
        css: projectName + '.css' 
}

/* JS */
gulp.task('js', ['cleanjs'], function(){
    // this task construction makes it async, according to Gulp's docs.
    var stream = gulp.src(paths.src.js)
                     .pipe(sourcemaps.init())
                     // .pipe(uglify())
                     .pipe(concat(fNames.js))
                     .pipe(sourcemaps.write())
                     .pipe(gulp.dest(paths.build.dir))
    return stream;
});

gulp.task('vendorjs', ['cleanvendor'], function(){
    var stream = gulp.src(paths.vendorjs)
                     .pipe(concat(fNames.vendorjs))
                     .pipe(gulp.dest(paths.build.dir))
    return stream;
});

/* SASS */
gulp.task('sass', ['cleancss'], function(){
    var stream = gulp.src(paths.src.sass)
                     .pipe(sourcemaps.init())
                     .pipe(sass().on('error', sass.logError))
                     .pipe(concat(fNames.css))
                     .pipe(gulp.dest(paths.build.dir)) 
    return stream;
});

/* CLEANUP */
gulp.task('cleanjs', function(cb){
    var stream = del(paths.build.dir + '/' + fNames.js, cb);
    return stream;
});
gulp.task('cleancss', function(cb){
    var stream = del(paths.build.dir + '/*.css', cb);
    return stream;
});
gulp.task('cleanvendor', function(cb){
    var stream = del(paths.build.dir + fNames.vendorjs);
    return stream;
});
gulp.task('cleantemplates', function(cb){
    var stream = del(paths.build.dir + '/templates.js');
    return stream;
});

/* TEMPLATE CACHE */
gulp.task('templates', ['cleantemplates'], function(){
    gulp.src(paths.src.templates)
        .pipe(templateCache('templates.js', {standalone: true}))
        .pipe(gulp.dest(paths.build.dir))
});

/* WATCH */
gulp.task('watch', function(){
    gulp.watch(paths.src.js, ['js']);
    gulp.watch(paths.src.sass, ['sass']);
    gulp.watch(paths.src.templates, ['templates']);
});

gulp.task('default', [
        'vendorjs', 
        'cleantemplates', 
        'cleanjs', 
        'cleancss', 
        'templates', 
        'js', 
        'sass', 
        'watch'
    ]);

