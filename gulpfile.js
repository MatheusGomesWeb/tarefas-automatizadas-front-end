/* eslint-disable no-undef */
const gulp = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();
const settings = require("./settings.js");

/*
 *
 * Nome da função: browserSyncServer
 * Oque faz: Cria um servidor, com liveReload e oferece um ip/porta, que permite pessoas de fora, visualizar o projeto em tempo real
 *
 *  Validação:
 *
 * Observa mudanças nos arquivos html
 * Observa mudanças nos arquivos js
 * Recarrega o browser automaticamente a cada mudança
 *
 */

function browserSyncServer() {
  browserSync.init({
    server: {
      baseDir: settings.baseDir,
    },
  });

  gulp.watch(`${settings.baseDir}*.html`).on("change", browserSync.reload);
  gulp.watch(`${settings.src.js}**/*.js`).on("change", browserSync.reload);
}

/*
 *
 * Nome da função: imageCompiler
 * Oque faz: Minifica as imagens da pasta src, e as envia para a pasta dist.
 *
 * Validação:
 *
 * Verifica se ouve modificações na imagem.
 * Verifica se a imagem já existe.
 * Apenas executa a minificação em novas imagens.
 * Apenas executa a minificação em imagens já existentes que tenham sofrido algum tipo de mudança.
 *
 */

// Caminho das imagens
const imgSrc = `${settings.src.images}/**/*`;
const imgDist = `${settings.dist.images}`;

function imageCompiler() {
  return gulp
    .src(imgSrc)
    .pipe(newer(imgDist))
    .pipe(imagemin())
    .pipe(notify("<%= file.relative %> otimizado com sucesso !"))
    .pipe(gulp.dest(imgDist));
}

/*
 *
 * Nome da função: sassCompiler
 * Oque faz: Compilar arquivos sass e gerar arquivo css final minificado
 *
 * Validacão:
 *
 * Adiciona compatibilidade com navegadores antigos
 * Compatibilidade com os mesmos browsers que o google oferece suporte (Lista compartilhada pelo google workspaces, browserslist)
 * Gera arquivo style.min.css final minificado
 * Mostra notificação (popup) ao compilar com sucesso
 * Observa mudanças nos arquivos html e sass, e caso tenham sido alterados, recarrega o browser automaticamente.
 *
 */

sass.compiler = require("node-sass");

function sassCompiler() {
  return gulp
    .src(`${settings.src.sass}**/*.scss`)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest(`${settings.dist.css}`))
    .pipe(notify("<%= file.relative %> foi gerado com sucesso !"))
    .pipe(browserSync.stream())
    .pipe(notify("O Browser foi recarregado"));
}

// Observa mudanças e executa o metodo correspondente
function watch() {
  gulp.watch(`${settings.src.sass}**/*.scss`, sassCompiler);
  gulp.watch(`${settings.src.images}**/*`, imageCompiler);
}

// Metodos gulp disponiveis
exports.default = (cb) => {
  console.log(
    "Comando desativado, utilize Gulp -T para listar as tarefas disponíveis"
  );

  cb();
};

// Monitora os arquivos e executa o metodo correspondente
exports.watch = gulp.parallel(watch, browserSyncServer);
