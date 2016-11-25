let gulp = require('gulp');
let open = require('open');


// open('http://localhost:4000');
gulp.task('default', function () {
    // place code for your default task here
    gulp.src('/server/index/js').pipe(open)
        .dest('/build/')

});
