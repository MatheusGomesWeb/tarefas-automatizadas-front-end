const settings = {

  //  ####### Informações e Configurações ####### 

  projectName: 'Minhas Tarefas Automatizadas Gulp',
  rootFolder: __dirname + '/',

  // ####### .gitignore ####### 

  // * arquivos e pastas que serão ignorados pelo git.        
  git_ignore: [
    '.vscode',
    'node_modules',
    'package-lock.json'
  ],

  // ####### ESTRUTURA DE PASTAS DO PROJETO ####### 

  // Estas pastas são do codigo fonte e arquivos do projeto, onde ficam os codigos fontes e arquivos de desenvolvimento.
  sourceFolders: {
    source: __dirname + '/src/', // source folder
    js: __dirname + '/src/js/', // javscripts
    images: __dirname + '/src/img/', // images
    sass: __dirname + '/src/sass/', // sass
    plugins: __dirname + '/src/plugins/'
  },

  // Estas pastas são dos arquivos finais do projeto, onde é o resultado do processamento do codigo de desenvolvimento.
  publicFolders: {
    public: __dirname + '/public/', // frontend folder
    css: __dirname + '/public/css/', // stylesheets
    js: __dirname + '/public/js/', // javascripts
    images: __dirname + '/public/img/' // images
  },

  // ####### ARQUIVOS DO PROJETO ####### 

  // Esses arquivos serão criados e serão monitorados pelo Watch, e irão gerar um functions.min.js como resultado final.
  jsFiles: {
    js: 'functions.js' // javscripts
  },

  // Esses arquivos serão criados e serão monitorados pelo Watch, e irão gerar um style.min.css como resultado final.
  sassFiles: {
    sass: 'style.scss', // sass
    sassReset: '_reset.scss',
    sassMediaQueries: '_mediaqueries.scss',
    sassColor: '_colors.scss',
    sassFonts: '_fonts.scss', // fontes
    sassForms: '_forms.scss'
  }

};

module.exports = settings;