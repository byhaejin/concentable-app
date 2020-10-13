var gulp = require('gulp');
var includer = require('gulp-ssi');
var webserver = require('gulp-webserver');
var concat =  require('gulp-concat');
var uglify =  require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var scss = require('gulp-sass');
var plumber =  require('gulp-plumber');

//util
var errorAlert = function(error) {
    console.log(error.toString());
    this.emit('end');
};

//front path
var src = 'front/src';
var dist = 'front/dist';
var paths = {
    js: src +'/static/js',
    scss: src + '/static/scss',
    page: src + '/pages/**/*.*',
    lib : src + '/static/lib'
};

/** task */
//웹서버를 실행한다.
gulp.task('SERVER:local', () => {
    return new Promise( resolve => {
        gulp.src(dist + '/')
            .pipe(webserver({
                livereload: true,
                open: true,
                port: 8000,
                livereload: {
                    enable: true,
                }
            }));
        resolve();
    });
});

//플러그인을 하나로 합친다
gulp.task('NODE-PLUGINS:combine',() => {
    return new Promise( resolve => {
         gulp.src([
             // 'node_modules/lodash/lodash.min.js',
             'node_modules/moment/min/moment.min.js',
             'node_modules/moment/locale/ko.js',
             'node_modules/moment-timezone/builds/moment-timezone.min.js',
             // 'node_modules/jquery/dist/jquery.min.js',
             // 'node_modules/jquery-validation/dist/jquery.validate.js',
             // 'node_modules/jquery-validation/dist/localization/messages_ko.js',
             'node_modules/framework7/js/framework7.bundle.js',
        ])
        .pipe(plumber({errorHandler: errorAlert}))
        .pipe(concat('plug-in.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist + '/static/js/'));

        resolve();
    });
});

//plugins : site javascript
gulp.task('PLUGINS:lib', () => {
    return new Promise( resolve => {
        gulp.src(paths.lib + '/**/*.*')
            .pipe(gulp.dest(dist + '/static/lib/'));

        resolve();
    });
});

//JS : site javascript
gulp.task('JS:combine', () => {
    return new Promise( resolve => {
        gulp.src(paths.js + '/**/*.*')
            .pipe(gulp.dest(dist + '/static/js/'));

        resolve();
    });
});

//image 복사
gulp.task('IMAGES:copy', () => {
    return new Promise( resolve => {
        gulp.src([
            src + '/static/images/*.*',
            src + '/static/images/**/*.*',
            paths.lib + '/images/**/*.*'
        ])
        .pipe(gulp.dest(dist + '/static/images/'));

        resolve();
    });
});

//webfont 복사
gulp.task('WEBFONT:copy', () => {
    return new Promise( resolve => {
        gulp.src([
            src + '/static/fonts/*.*',
        ])
        .pipe(gulp.dest(dist + '/static/fonts/'));

        resolve();
    });
});

//SCSS 파일을 css 컴파일
gulp.task('SCSS:compile', () => {
    return new Promise( resolve => {
        var options = {
            outputStyle: "compressed" // nested, expanded, compact, compressed
            , indentType: "space" // space, tab
            , indentWidth: 4
            , precision: 8
            , sourceComments: false // 코멘트 제거 여부
        };

        gulp.src(paths.scss + '/style.scss')
            .pipe(plumber({errorHandler: errorAlert}))
            .pipe( sourcemaps.init() )
            .pipe( scss(options) )
            .pipe( sourcemaps.write() )
            .pipe( gulp.dest(dist + '/static/css'));

        resolve();
    });
});

//INDEX : index.html
gulp.task('INDEX:indexCopy', () => {
    return new Promise( resolve => {
        gulp.src([
            src + '/pages/*.html',
        ])
        .pipe(gulp.dest(dist+'/'));

        resolve();
    });
});

//HTML copy
gulp.task('HTML:Combine', () => {
    return new Promise( resolve => {
        gulp.src([
            src + '/pages/*/*.*',
        ])
        .pipe(includer())
        .pipe(gulp.dest(dist+'/'));

        resolve();
    });
});

/** Watch **/
gulp.task('watch', () => {
    return new Promise( resolve => {
        gulp.watch(paths.js + '/*.js', gulp.series(['JS:combine']));
        gulp.watch(paths.scss + '/*.scss', gulp.series(['SCSS:compile']));
        gulp.watch(paths.scss + '/**/*.scss', gulp.series(['SCSS:compile']));
        gulp.watch(src + '/pages/main/*.html', gulp.series(['INDEX:indexCopy']));
        gulp.watch( paths.page, gulp.series(['HTML:Combine']));

        resolve();
    });
});

gulp.task( 'default', gulp.series([
    'NODE-PLUGINS:combine',
    'PLUGINS:lib',
    'JS:combine',
    'IMAGES:copy',
    'SCSS:compile',
    'WEBFONT:copy',
    'INDEX:indexCopy',
    'HTML:Combine'
]));