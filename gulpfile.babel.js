import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";

sass.compiler = require("node-sass");

const path = {
  styles: {
    src: "assets/scss/style.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss",     //assets 폴더 아래 scss폴더 안에 있는 모든 scss 파일을 지켜봄.
  },
};

function styles() {
  return gulp
    .src(path.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(csso())                           // minify (압축)함.
    .pipe(gulp.dest(path.styles.dest));     // path.style.dest => src폴더 안의 static안의 styles안에 저장함.
}

function watchFiles(){
  gulp.watch(path.styles.watch, styles);
}

const dev = gulp.series([styles, watchFiles]);

export default dev;