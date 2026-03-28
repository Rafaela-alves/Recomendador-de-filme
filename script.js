let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendações de Filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de filmes com Qi alto?");
  campoAventura = createCheckbox("Gosta de filme sobre sistemas?");
}

function draw() {
  background("grey");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(6, 10, 15));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Aventura Épica";
    } else {
      if (idade >= 12) {
        if (gostaDeFantasia || gostaDeAventura) {
          return "Filmes Fantásticos";
        } else {
          return "Desafios Tecnológicos";
        }
      } else {
        if (gostaDeFantasia) {
          return "Magia e Mistério";
        } else {
          return "Explorando o Mundo Digital";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Mundo Mágico Infantil";
    } else {
      return "Primeiros Passos na Tecnologia";
    }
  }
}
