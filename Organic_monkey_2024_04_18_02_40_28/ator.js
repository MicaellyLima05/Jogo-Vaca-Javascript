let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemVaca, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    xAtor += 2;
  }
  if(keyIsDown(LEFT_ARROW)) {
    xAtor -= 2;
  }
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, larguraCarro, xAtor, yAtor, 15);
    if(colisao) {
      voltaAtorPosicaoInicial();
      somColisao.play();
      if(meusPontos > 0) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(30,144,255));
  text(meusPontos, 110, 27);
}

function marcaPontos() {
  if(yAtor < 15) {
     meusPontos += 1;
     somPonto.play();
     voltaAtorPosicaoInicial()
     }
}