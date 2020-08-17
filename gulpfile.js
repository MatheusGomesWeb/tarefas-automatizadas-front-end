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

// ****** Funções para criação de pastas *******

// * cria estrutura das pastas
function createAllFolders(callback) {

    // converte os atributos do objeto sourceFolders como um array 
    var sourceFoldersArray = Object.entries(settings.sourceFolders);
    var publicFoldersArray = Object.entries(settings.publicFolders);

    // percorre os indices do array
    publicFoldersArray.forEach(function ([item, index]) {

        // cria as pastas com o valor do indice do array
        gulp.src('*.*',
            { read: false })
            .pipe(gulp.dest(index));
    });

    // percorre os indices do array
    sourceFoldersArray.forEach(function ([item, index]) {

        // cria as pastas com o valor do indice do array
        gulp.src('*.*', { read: false })
            .pipe(gulp.dest(index));
    });

    callback();
}

// ****** Funções para criação de arquivos *******

// * cria o arquivo .gitignore com os valores definidos no array git_ignore.
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

// Cria os arquivos Sass
function createAllFilesSass(callback) {

    let sassFilesArray = Object.entries(settings.sassFiles);

    sassFilesArray.forEach(function ([item, index]) {

        fs.appendFileSync(settings.sourceFolders.sass + index, '');

    });

    callback();
}

// Cria os arquivos da pasta ROOT - index, README.md e .gitignore
function createRootFiles(callback) {

    fs.writeFileSync('index.html', '');
    fs.writeFileSync('READMedeE.md', '# ' + settings.projectName);

    createFileGitignore();

    callback();
}

exports.default = gulp.series(createRootFiles, createAllFolders, createAllFilesSass);
