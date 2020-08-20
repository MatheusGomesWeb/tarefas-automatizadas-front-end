  
<p align="center">  
<img src="./readme/gulp.png" alt="Gulp"/>
</p>

<h1 align="center">
Minhas Tarefas Automatizadas Gulp
</h1>

<p align="center">
  Crie uma estrutura organizada de pastas para projetos front-end com apenas um comando, Minifique arquivos Sass, JavaScript e Reduza o tamanho das imagens, Monitore alterações em arquivos e imagens visualizando o resultado no Browser em tempo real com a ferramenta BrowserSync. 
</p>

<p align="center"><b>Status</b> Finalizado</p>

<p align="center">
 <a href="#bibliotecas-utilizadas">Bibliotecas Utilizadas</a> •
 <a href="#pré-requisitos">Pré-Requisitos</a> •
 <a href="#instalação">Instalação</a> • 
 <a href="#configuração">Configurações</a> • 
 <a href="#como-utilizar">Como Utilizar</a> • 
 <a href="#autor">Autor</a> • 
 <a href="#memo-licença">Licença</a>
</p>
___

### Bibliotecas utilizadas

* [Imagemin](https://www.npmjs.com/package/gulp-imagemin)
* [Uglify](https://www.npmjs.com/package/gulp-uglify)
* [Sass](https://www.npmjs.com/package/gulp-sass)
* [Concat](https://www.npmjs.com/package/gulp-concat)
* [AutoPrefixer](https://www.npmjs.com/package/gulp-autoprefixer)
* [Babel](https://www.npmjs.com/package/gulp-babel)
* [BrowserSync](https://www.npmjs.com/package/browser-sync)

___

### Pré-Requisitos

* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
* Básico de [Gulp](https://gulpjs.com/)

___

### Instalação

Supondo que você já tenha o **Node.js** e um gerenciador de pacotes como **NPM** ou **Yarn** instalado no seu computador, siga os passos seguintes.

___

#### Baixe ou Clone o Repositório

``` 
git clone https://github.com/MatheusGomesWeb/minhas-taferas-automatizadas-gulp.git
```

___

#### Instale as dependencias do projeto

``` 
NPM -> npm install
```

``` 
YARN -> yarn install
```

___

### Configuração

Todas as configurações estão localizadas no arquivo **settings.js**.

``` 
projectName: Nome do projeto que será inserido no README.md
rootFolder: Pasta Raiz do projeto

git_ignore: Arquivos ou pastas que serão ignoradas pelo Git

sourceFolders: Arquivos de desenvolvimento do projeto
publicFolders: Arquivos finais que são resultado do processamento das tarefas.

jsFiles: Arquivos JavaScript que serão criados automaticamente.
sassFiles: Arquivos Sass que serão criados automaticamente.
```

___

### Como Utilizar

**Tarefas Disponíveis** - Para visualizar todas as tarefas digite:

``` 
gulp -T
```

#### Tarefa padrão

``` 
gulp
```

* **Tarefas Executadas**:

  + **createRootFiles**: Cria os arquivos index.html, .gitignore e README.md na raiz do projeto.
  + **createAllFolders**: Cria toda a estrutura e organização de pastas para se iniciar um projeto front-end.

  
**Obs.** Toda organização e informações que serão gerados são pré-configurados no **settings.js**

___

``` 
gulp generateFiles
```

* **Tarefas Executadas**:
  + **createAllFilesSass**: Cria todos os arquivos .scss dentro da pasta pré configurada no **settings.js**
  + **createAllFilesJs**: Cria todos os arquivos .js dentro da pasta pré configurada no **settings.js**

``` 
gulp watch
```

* **Tarefas Executadas**: 
  + **browserSync**: Inicia um servidor com **LiveReload**.
  + **watch**: Monitora todos os arquivos .html, .scss, .js e imagens, caso tenha alguma alteração ele compila, minifica, ou reduz o tamanho dos arquivos / imagens de acordo com a ação realizada.

___

### Autor

<a href="https://github.com/MatheusGomesWeb">
 <img style="border-radius: 50%; " src="https://avatars3.githubusercontent.com/u/12579898?s=96&v=4" width="100px; " alt=""/>
 <br />
 <sub><b>Matheus Gomes</b></sub></a> <a href="https://github.com/MatheusGomesWeb" title="Matheus Gomes Web">🚀</a>
 <br>
Feito com ❤️ por Matheus Gomes 👋🏽 Entre em contato!
<br>
<a href="https://www.linkedin.com/in/matheusgomes/" target="_blank">
<img src="https://img.shields.io/badge/-Matheus-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheusgomes/"/>
 </a>
 <a href="https://twitter.com/MatheusGomesWeb" target="_blank">
<img alt="twitter Matheus Gomes" src="https://img.shields.io/badge/-@MatheusGomesWeb-%231ca0f1?style=flat-square&logo=twitter&logoColor=white&link=https://twitter.com/MatheusGomesWeb"/>
 </a>
 <a href="https://www.facebook.com/matheusgomesrdj/" target="_blank">
<img src="https://img.shields.io/badge/-MatheusGomes-%234267b2?style=flat-square&logo=facebook&logoColor=white&link=https://www.facebook.com/matheusgomesrdj/"/>
</a>

___

### :memo: Licença

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
