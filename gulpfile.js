const gulp = require("gulp");
const webpack = require("webpack-stream");
const nodemon = require("gulp-nodemon");
const browserSync = require("browser-sync").create();
const webpackConfig = require("./webpack.config.js");

const { gulpSettings } = require("./config.json");

gulp.task("webpack", () =>
  gulp
    .src("./src/js/index.js")
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest("./public/dist/js"))
    .pipe(browserSync.stream())
);

gulp.task("nodemon", done => {
  nodemon({
    script: "./server.js",
    ext: "js pug",
    ignore: ["src/"],
    done
  }).on("restart", () => {
    browserSync.reload();
  });
});

gulp.task("browser-sync", () => {
  browserSync.init({
    proxy: "http://localhost:3000",
    port: gulpSettings.browserSync.port,
    browser: gulpSettings.browserSync.browser
  });
});

gulp.task("watch", () => {
  gulp.watch("./src/**/*", gulp.series("webpack"));
});

gulp.task(
  "build",
  gulp.series("webpack", gulp.parallel("nodemon", "browser-sync", "watch"))
);

gulp.task("default", gulp.series("build"));
