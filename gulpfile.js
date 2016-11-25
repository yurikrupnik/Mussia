let gulp = require('gulp');
let open = require('open');
let nodemon = require('gulp-nodemon');
const babel= require('gulp-babel');
const mocha = require('gulp-mocha');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

// open('http://localhost:4000');
gulp.task('default', function () {
    // place code for your default task here
    // gulp.src('/server/index/js').pipe(open)
    //     .dest('/server/')

});



gulp.task('babel', function () {
    // gulp.src(['server/**/*.js'])
    //     // .pipe(concat())
    //     .pipe(babel())
    //     .pipe(rename({prefix: 'min'}))
    //     .pipe(gulp.dest('server/'))
});

gulp.task('start', function () {
    nodemon({
        script: 'server/index.js',
        // exec: 'babel'
        // ext: 'js html',
        // evn: {NODE_ENV: 'development'},
        // task: ['npm start nodemon server/index.js --exec babel-node']
    })
});

// gulp.task('test', function () {
//     return gulp.src(['server/test/**/*.js'], { read: false })
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(mocha({ reporter: 'list' }));
//         // .on('error', gutil.log);
//
// });