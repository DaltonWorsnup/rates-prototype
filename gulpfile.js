let gulp = require('gulp');

gulp.task('default', function () {
  gulp.src('node_modules/litegraph.js/css/litegraph.css')
    .pipe(gulp.dest('./src/assets'));
});
