const gulp = require('gulp');
const fs = require('fs');

const settings = {

    //  ####### Informações e Configurações ####### 

    projectName: 'Minhas Tarefas Automatizadas do Gulp',

    /*
        ####### .gitignore ####### 
 
        * arquivos e pastas que serão ignorados pelo git.         
    */
    git_ignore: [
        '.vscode',
        'node_modules',
        'package-lock.json',
        'index.html'
    ],

    /*
        ####### ESTRUTURA DE PASTAS DO PROJETO ####### 
                 * 
        * Estas pastas são do codigo fonte e arquivos frontend do projeto, onde ficam os codigos fontes e arquivos de desenvolvimento.
    */
    sourceFolders: {

        source: './src', // source folder
        frontend: './src/frontend', // frontend folder
        css: './src/frontend/css', // stylesheets
        js: './src/frontend/js', // javscripts
        images: './src/frontend/img', // images
        sass: './src/frontend/sass', // sass
        libs: './src/frontend/libs',  // libs: jquery, bootstrap etc...

    },

    /* 
        * Estas pastas são do codigo fonte e arquivos BACKEND do projeto.
    */
    sourceFoldersBackend: {
        source: './src/backend' // backend files
    },

    /* 
        * Estas pastas são do codigo fonte e arquivos finais do projeto, onde é o resultado do processamento do codigo de desenvolvimento.
    */
    publicFolders: {

        frontend: './public', // frontend folder
        css: './public/css', // stylesheets
        js: './public/js', // javscripts
        images: './public/img', // images
        sass: './public/sass', // sass
        libs: './public/libs',  // libs: jquery, bootstrap etc...

    }

};

/******************************************
 * ####### MANIPULAÇÃO DE PASTAS. ####### *
 ******************************************/

// cria estrutura das pastas
function createAllFolders(callback) {

    // converse os atributos do objeto sourceFolders como um array 
    var sourceFoldersArray = Object.entries(settings.sourceFolders);
    var publicFoldersArray = Object.entries(settings.publicFolders);
    var backendFoldersArray = Object.entries(settings.sourceFoldersBackend);

    // percorre os indices do array
    publicFoldersArray.forEach(function ([item, index]) {

        // cria as pastas com o valor do indice do array

        gulp.src('*.*', { read: false })
            .pipe(gulp.dest(index));

    });

    // percorre os indices do array
    sourceFoldersArray.forEach(function ([item, index]) {

        // cria as pastas com o valor do indice do array

        gulp.src('*.*', { read: false })
            .pipe(gulp.dest(index));

    });

    // percorre os indices do array
    backendFoldersArray.forEach(function ([item, index]) {

        // cria as pastas com o valor do indice do array

        gulp.src('*.*', { read: false })
            .pipe(gulp.dest(index));

    });

    callback();

}

/********************************************
* ####### MANIPULAÇÃO DE ARQUIVOS. ####### *
********************************************/

// cria o arquivo .gitignore com os valores definidos no array git_ignore.
function createFileGitignore(callback) {

    // caso não tenha valores definidos no array git_ignore, será criado um arquivo vazio.    
    if (settings.git_ignore != "") {

        // limpa o arquivo original
        fs.writeFileSync('./.gitignore', '');

        settings.git_ignore.forEach(function (item, index) {

            // escreve o novo arquivo com os dados
            fs.appendFileSync('./.gitignore', item + '\n');
        });

    } else {
        fs.appendFileSync('./.gitignore', '');
    }

    callback();
};

//  ####### index.html ####### 

// cria o arquivo index.html
function createFileIndexHtml(callback) {

    fs.appendFileSync('index.html', '');

    callback();
}

//  ####### README.md ####### 

// cria o arquivo README.md com nome do projeto
function createFileReadmeMD(callback) {

    fs.appendFileSync('README.md', '# ' + settings.projectName);

    callback();
}
/***************************
* ####### Arquivos ####### *
****************************/

exports.createFileGitignore = createFileGitignore;
exports.createFileIndexHtml = createFileIndexHtml;
exports.createFileReadmeMD = createFileReadmeMD;

/************************
* ####### Pastas ####### *
**************************/

exports.createAllFolders = createAllFolders;

/************************
* ####### DEFAULT ####### *
**************************/

exports.startProject = gulp.parallel(createFileGitignore, createFileIndexHtml, createFileReadmeMD, 
                       gulp.series(createAllFolders, createAllFiles));

exports.default = function (callback) {

    console.log("gulp default não possui tarefas disponiveis, use o comando gulp -T ou gulp --tasks para ver as tarefas disponiveis.");

    callback();
};
