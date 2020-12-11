import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import del from "del"; // 삭제를 위한 모듈
import browserify from "gulp-browserify";
import babel from "babelify";

sass.compiler = require("node-sass");

const path = {
  styles: {
    src: "assets/scss/style.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss", //assets 폴더 아래 scss폴더 안에 있는 모든 scss 파일을 지켜봄.
  },
  js: {
    src: "assets/js/main.js",
    dest: "src/static/js",
    watch: " assets/js/**/*.js",
  },
};

// 삭제를 위한 함수
const clear = () => del(["src/static"]);

const styles = () => {
  return gulp
    .src(path.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(csso()) // minify (압축)함.
    .pipe(gulp.dest(path.styles.dest)); // path.style.dest => src폴더 안의 static안의 styles안에 저장함.
};

const js = () =>
  gulp
    .src(path.js.src, { allowEmpty: true })
    .pipe(
      browserify({
        transform: [
          babel.configure({
            presets: ["@babel/preset-env"],
          }),
        ],
      })
    )
    .pipe(gulp.dest(path.js.dest));

const watchFiles = () => {
  gulp.watch(path.styles.watch, styles);
  gulp.watch(path.js.watch, js);
};

const dev = gulp.series(clear, styles, js, watchFiles);

export const build = gulp.series(clear, styles, js);

export default dev;
