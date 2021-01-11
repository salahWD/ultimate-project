let gulp = require(`gulp`),
  concat = require(`gulp-concat`),
  sass = require(`gulp-sass`),
  autoprefixer = require(`gulp-autoprefixer`),
  pug = require(`gulp-pug`),
  livereload = require(`gulp-livereload`),
  sourcemaps = require(`gulp-sourcemaps`),
  minify = require(`gulp-minify`);

gulp.task("html", () => {
  console.log("html task started");
  return gulp
    .src(`./stage/html/*.pug`)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(`./dist`))
    .pipe(livereload());
});

gulp.task("css", () => {
  console.log("css task started");
  return gulp
    .src([`./stage/css/**/*.scss`, `./stage/css/**/*.css`])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat(`main.css`))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(`./dist/css`))
    .pipe(livereload());
});

gulp.task("js", () => {
  console.log("js task started");
  return gulp
    .src(`stage/js/*.js`)
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest(`./dist/js`))
    .pipe(livereload());
});

gulp.task("watch", () => {
  require("./server.js");
  livereload.listen();
  gulp.watch("stage/html/**/*.pug", gulp.series("html"));
  gulp.watch(["stage/css/**/*.scss", "stage/css/**/*.css"], gulp.series("css"));
  gulp.watch("stage/js/*.js", gulp.series("js"));
});
