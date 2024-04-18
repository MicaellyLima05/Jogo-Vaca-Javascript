//posição x dos carros
let xCarros = [600, 600, 600, 600, 600, 600];

//posição y dos Carros
let yCarros = [40, 96, 156, 210, 270, 318];

//velocidades dos carros
let velocidadesCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];

//medidas carros
let comprimentoCarro = 50;
let larguraCarro = 40;


function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro() {
  for(let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadesCarros[i];
  }
}

function voltaCarroPosicaoInicial() {
  for(let i = 0; i < imagemCarros.length; i++) {
    if(passouTelaToda(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTelaToda(xCarro) {
  return xCarro < - 50;
}

