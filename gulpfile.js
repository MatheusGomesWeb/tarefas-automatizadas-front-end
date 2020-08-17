const gulp = require('gulp');

//Node File System
const fs = require('fs');

// plugins e libs
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// arquivo de configuração
const settings = require('./settings');

// Funções para criação de arquivos

/*
  * cria o arquivo .gitignore com os valores definidos no array git_ignore.
*/
function createFileGitignore() {

    // caso não tenha valores definidos no array git_ignore, será criado um arquivo vazio.    
    if (settings.git_ignore != "") {

        // limpa o arquivo original
        fs.writeFileSync(__dirname + '/.gitignore', '');

        settings.git_ignore.forEach(function (item, index) {

            // escreve o novo arquivo com os dados
            fs.appendFileSync(__dirname + '/.gitignore', item + '\n');
        });

    } else {
        fs.appendFileSync(__dirname + '/.gitignore', '');
    }
};

function createFiles(callback) {

    fs.writeFileSync('index.html', '');
    fs.writeFileSync('READMedeE.md', '# ' + settings.projectName);

    createFileGitignore();

    /*return gulp.src(__dirname)
    .pipe(createFileGitignore())
    .pipe(gulp.dest(__dirname));*/

    callback();
}

exports.default = gulp.series(createFiles);
