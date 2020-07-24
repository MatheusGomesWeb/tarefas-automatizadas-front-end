const gulp = require('gulp');
const fs = require('fs');

const settings = {

    //  ####### Informações e Configurações ####### 

    projectName: 'Minhas Tarefas Automatizadas do Gulp',

    //  ####### .gitignore ####### 

    // arquivos e pastas que serão ignorados pelo git.
    git_ignore: [
        '.vscode',
        'node_modules',
        'package-lock.json',
        'index.html'     
    ]
};

/******************************************
 * ####### MANIPULAÇÃO DE PASTAS. ####### *
 ******************************************/

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

/************************
* ####### DEFAULT ####### *
**************************/

exports.startProject = gulp.parallel(createFileGitignore, createFileIndexHtml, createFileReadmeMD);

exports.default = function (callback) {

    console.log("gulp default não possui tarefas disponiveis, use o comando gulp -T ou gulp --tasks para ver as tarefas disponiveis.");

    callback();
};
