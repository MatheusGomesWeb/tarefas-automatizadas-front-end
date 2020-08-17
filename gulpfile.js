const gulp = require('gulp');

//Node File System
const fs = require('fs');

// plugins e libs
const gulp_imagemin = require('gulp-imagemin'); // Minificar Imagens - Reduzir tamanho das imagens
const gulp_uglify = require('gulp-uglify'); // Minificar JavaScript
const gulp_sass = require('gulp-sass'); // Minificar Sass
const gulp_concat = require('gulp-concat'); // Junta varios arquivos em apenas um arquivo final.
const gulp_autoprefixer = require('gulp-autoprefixer'); // Adiciona tags do css para compatibilidade com browsers antigos.

// arquivo de configuração
const settings = require('./settings');

// ****** Funções para criação de pastas *******

// cria estrutura de pastas
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

// cria o arquivo .gitignore com os valores definidos no array git_ignore.
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

// Criação de todos os arquivos JS
function createAllFilesJs(callback) {

    let jsFilesArray = Object.entries(settings.jsFiles);

    jsFilesArray.forEach(function ([item, index]) {

        fs.appendFileSync(settings.sourceFolders.js + index, '');

    });

    callback();
}

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

// ****** Bibliotecas *******

// Minificar Imagens - Gulp-Imagemin
function minifyImages(callback) {

    gulp.src(settings.sourceFolders.images + '*')
        .pipe(gulp_imagemin())
        .pipe(gulp.dest(settings.publicFolders.images));

    callback();
}

// Minificar JavaScript - Gulp-Uglify
function minifyJs(callback) {
    gulp.src(settings.sourceFolders.js + '*.js')
        .pipe(gulp_uglify())
        .pipe(gulp.dest(settings.publicFolders.js));

    callback();
}

// Minificar Sass - Gulp-Sass
function minifySass(callback) {

    gulp.src(settings.sourceFolders.sass + '*.scss')
        .pipe(gulp_autoprefixer({
            overrideBrowserslist: ['last 99 versions'],
            grid: "true",
            cascade: false
        }))
        .pipe(gulp_sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp_concat('style.min.css'))
        .pipe(gulp.dest(settings.publicFolders.css));

    callback();
}

exports.default = gulp.series(createRootFiles, createAllFolders);
exports.generateFiles = gulp.parallel(createAllFilesSass, createAllFilesJs);
//exports.watchFiles = gulp.parallel();

exports.minifySass = minifySass;
