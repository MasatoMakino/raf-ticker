const { dest, parallel, series, src, watch } = require("gulp");

const doc = require("gulptask-tsdoc").generateTask({
  ignoreCompilerErrors: true,
});
const server = require("gulptask-dev-server").generateTask("./docs/demo");
const { bundleDemo, watchDemo } = require("gulptask-demo-page").generateTasks();

const copyGlob = "./demoSrc/**/*.{png,jpg,jpeg}";
const copy = () => {
  return src(copyGlob, { base: "./demoSrc/" }).pipe(dest("./docs/demo"));
};

const { tsc, tscClean, watchTsc } = require("gulptask-tsc").generateTasks({
  projects: ["./tsconfig.cjs.json", "./tsconfig.esm.json"],
});

const watchTasks = async () => {
  watchDemo();
  watchTsc();
  watch(copyGlob, copy);
};

exports.start_dev = series(watchTasks, server);
exports.build = series(parallel(tsc, copy), bundleDemo, doc);
exports.build_clean = series(parallel(tscClean, copy), bundleDemo, doc);
exports.tsc = tsc;
