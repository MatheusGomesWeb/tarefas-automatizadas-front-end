/* eslint-disable no-undef */
const baseDir = "../";

const settings = {
  baseDir,

  // src folder
  src: {
    source: `${baseDir}src/`, // source folder
    images: `${baseDir}src/img/`, // images
    js: `${baseDir}src/js/`, // javascripts
    sass: `${baseDir}src/sass/`, // sass
  },

  // dist folder
  dist: {
    css: `${baseDir}dist/css/`, // stylesheets
    js: `${baseDir}dist/js/`, // javascripts
    images: `${baseDir}dist/img/`, // images
  },
};

module.exports = settings;
