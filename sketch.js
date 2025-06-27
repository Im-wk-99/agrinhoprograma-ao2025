let estado = "menu";
let estadoAnterior = "menu";
let botaoComecar, botaoQuiz, botaoSobre, botaoVoltar, botaoAvancar;
let img;
let perguntas;
let perguntaAtual = 0;
let respostasCorretas = 0;
let respostaSelecionada = false;
let botoes = [];

let deslocamentoY = 0;
let alturaTotal = 1200; // Altura total do conteúdo com rolagem

function preload() {
  img = loadImage('img/imagem1.jpg');
}

function setup() {
  createCanvas(600, 400);

  botaoComecar = createButton("Começar");
  botaoComecar.position(265, 100);
  botaoComecar.mousePressed(() => mudarEstado("jogo"));

  botaoQuiz = createButton("Quizizz");
  botaoQuiz.position(269, 150);
  botaoQuiz.mousePressed(() => mudarEstado("quiz"));

  botaoSobre = createButton("Sobre o Desenvolvedor");
  botaoSobre.position(230, 200);
  botaoSobre.mousePressed(() => mudarEstado("sobre"));

  botaoVoltar = createButton("Voltar");
  botaoVoltar.position(10, 10);
  botaoVoltar.mousePressed(() => voltar());
  botaoVoltar.hide();

  botaoAvancar = createButton("Avançar");
  botaoAvancar.position(500, 360);
  botaoAvancar.mousePressed(() => {
    if (estado === "jogo") mudarEstado("fase2");
    else if (estado === "fase2") mudarEstado("campoCidade");
  });
  botaoAvancar.hide();

  perguntas = [
    {
      pergunta: "Qual é uma característica principal do campo?",
      opcoes: ["Alta densidade populacional", "Presença de indústrias", "Atividades agropecuárias"],
      respostaCorreta: 2
    },
    {
      pergunta: "O que caracteriza a cidade?",
      opcoes: ["Predomínio de áreas verdes", "Produção de alimentos", "Infraestrutura urbana"],
      respostaCorreta: 2
    },
    {
      pergunta: "Qual é uma forma da cidade ajudar o campo?",
      opcoes: ["Fornecendo produtos culturais", "Exportando alimentos", "Com tecnologia e serviços"],
      respostaCorreta: 2
    }
  ];
}

function draw() {
  background(220);

  if (estado === "menu") {
    mostrarMenu();
  } else if (estado === "jogo") {
    mostrarJogo();
  } else if (estado === "quiz") {
    mostrarQuiz();
  } else if (estado === "sobre") {
    mostrarSobre();
  } else if (estado === "fase2") {
    mostrarFase2();
  } else if (estado === "campoCidade") {
    mostrarCampoCidade();
  } else if (estado === "resultado") {
    mostrarResultado();
  }
}

function mostrarMenu() {
  mostrarOuEsconderBotoesMenu(true);
  botaoVoltar.hide();
  botaoAvancar.hide();
  removerBotoes();
  imageMode(CENTER);
  image(img, width / 2, height / 2);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("CAMPO E CIDADE", width / 2, 40);
}

function mostrarJogo() {
  mostrarOuEsconderBotoesMenu(false);
  botaoVoltar.show();
  botaoAvancar.hide(); // Desativado aqui
  removerBotoes();

  push();
  translate(0, -deslocamentoY);

  fill(220);
  rect(0, 0, width, alturaTotal);

  textAlign(CENTER, TOP);
  textSize(36);
  fill(0);
  text("CAMPO E CIDADE", width / 2, 20);

  textAlign(LEFT, TOP);
  textSize(18);
  textWrap(WORD);
  fill(0);

  let yCampo = 80;
  text("🌾 O CAMPO:\n\nO campo é uma vasta área rural onde predominam atividades agrícolas e agropecuárias. É caracterizado por uma menor densidade populacional e uma paisagem natural mais preservada. No campo, encontramos fazendas, plantações, criações de animais e um modo de vida mais próximo da natureza. A agricultura e a pecuária são as principais fontes de renda e sustentação das famílias que ali vivem. Além disso, o campo é responsável por grande parte do abastecimento alimentar das cidades, produzindo alimentos como grãos, frutas, legumes, leite e carne.\n\nApesar dos avanços tecnológicos, muitas comunidades rurais ainda enfrentam desafios como o acesso limitado a serviços de saúde, educação e infraestrutura. No entanto, o campo vem passando por processos de modernização, com o uso de máquinas agrícolas, internet rural e técnicas sustentáveis de cultivo. O modo de vida no campo costuma ser mais calmo, com maior contato com a natureza, o que atrai também moradores urbanos em busca de qualidade de vida.", 30, yCampo, width - 60);

  let yCidade = yCampo + 380;
  text("\n🏙️ A CIDADE:\n\nA cidade é caracterizada por uma alta densidade populacional, infraestrutura urbana desenvolvida e intensa atividade econômica e cultural. Nela, predominam os edifícios, avenidas, comércio, serviços e indústrias. As cidades oferecem uma vasta gama de oportunidades de trabalho, estudo, lazer e acesso a serviços de saúde, transporte e comunicação.\n\nNo entanto, o crescimento acelerado das cidades também traz desafios como trânsito, poluição, desigualdade social e violência. A vida urbana é marcada por um ritmo mais acelerado, onde as pessoas costumam ter rotinas agitadas. Apesar disso, a cidade é um polo de inovação, conhecimento e convivência entre diferentes culturas.\n\nA cidade depende do campo para sua alimentação e matérias-primas, ao passo que oferece ao campo tecnologias, serviços e produtos industrializados. Essa relação de troca e interdependência é essencial para o desenvolvimento sustentável da sociedade.", 30, yCidade, width - 60);

  pop();

  textSize(14);
  textAlign(CENTER);
  fill(50);
  text("Use a roda do mouse ou ↑ ↓ para rolar", width / 2, height - 20);
}

function mostrarFase2() {
  mostrarOuEsconderBotoesMenu(false);
  botaoVoltar.show();
  botaoAvancar.show();

  background(220);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("CIDADE", width / 2, 40);

  textAlign(LEFT, TOP);
  textSize(18);
  textWrap(WORD);
  fill(0);

  text("A cidade é caracterizada por uma alta densidade populacional...", 30, 80, width - 60);
}

function mostrarCampoCidade() {
  mostrarOuEsconderBotoesMenu(false);
  botaoVoltar.show();
  botaoAvancar.hide();

  textAlign(CENTER, CENTER);
  textSize(32);
  text("Campo e Cidade: Uma Troca Essencial", width / 2, 40);

  textAlign(LEFT, TOP);
  textSize(16);
  textWrap(WORD);
  fill(0);
  text(
    "O campo e a cidade mantêm uma relação de interdependência essencial para o funcionamento equilibrado da sociedade. [...]",
    30, 80, width - 60
  );
}

function mostrarQuiz() {
  mostrarOuEsconderBotoesMenu(false);
  botaoVoltar.show();
  botaoAvancar.hide();
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Pergunta " + (perguntaAtual + 1), width / 2, 40);
  textAlign(LEFT, TOP);
  textSize(18);
  text(perguntas[perguntaAtual].pergunta, 30, 80, width - 60);
  removerBotoes();
  for (let i = 0; i < 3; i++) {
    let yPos = 140 + i * 40;
    let corFundo = color(255);
    if (respostaSelecionada !== false) {
      if (i === perguntas[perguntaAtual].respostaCorreta) corFundo = color(0, 255, 0);
      else if (i === respostaSelecionada) corFundo = color(255, 0, 0);
    }
    let botao = createButton(perguntas[perguntaAtual].opcoes[i]);
    botao.position(30, yPos);
    botao.style('background-color', corFundo);
    botao.mousePressed(() => verificarResposta(i));
    botoes.push(botao);
  }
}

function verificarResposta(indiceResposta) {
  respostaSelecionada = indiceResposta;
  if (indiceResposta === perguntas[perguntaAtual].respostaCorreta) respostasCorretas++;
  setTimeout(() => {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
      respostaSelecionada = false;
      mudarEstado("quiz");
    } else {
      mudarEstado("resultado");
    }
  }, 1000);
}

function removerBotoes() {
  for (let i = 0; i < botoes.length; i++) botoes[i].remove();
  botoes = [];
}

function mostrarResultado() {
  let porcentagem = (respostasCorretas / perguntas.length) * 100;
  clear();
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Você acertou " + respostasCorretas + " de " + perguntas.length + " perguntas!", width / 2, height / 3);
  text("Sua pontuação: " + porcentagem.toFixed(2) + "%", width / 2, height / 2);
  botaoVoltar.show();
  botaoAvancar.hide();
}

function mostrarSobre() {
  mostrarOuEsconderBotoesMenu(false);
  botaoVoltar.show();
  botaoAvancar.hide();
  textAlign(CENTER, CENTER);
  textSize(36);
  text("Desenvolvedor: Wesley Kauan", width / 2, height / 10);
  textSize(20);
  text("No início eu tive muita dificuldade, mas fui evoluindo com a prática.", width / 2, height / 2);
}

function mudarEstado(novoEstado) {
  estadoAnterior = estado;
  estado = novoEstado;
}

function mostrarOuEsconderBotoesMenu(mostrar) {
  if (mostrar) {
    botaoComecar.show();
    botaoQuiz.show();
    botaoSobre.show();
  } else {
    botaoComecar.hide();
    botaoQuiz.hide();
    botaoSobre.hide();
  }
}

function voltar() {
  if (estado === "campoCidade") {
    mudarEstado("fase2");
  } else if (estado === "fase2") {
    mudarEstado("jogo");
  } else if (estado === "jogo") {
    mudarEstado("menu");
    deslocamentoY = 0;
  } else if (estado === "quiz") {
    mudarEstado("menu");
    perguntaAtual = 0;
    respostasCorretas = 0;
    respostaSelecionada = false;
  } else if (estado === "sobre") {
    mudarEstado("menu");
  } else if (estado === "resultado") {
    perguntaAtual = perguntas.length - 1;
    respostasCorretas--;
    respostaSelecionada = false;
    mudarEstado("quiz");
  } else {
    mudarEstado("menu");
  }
}

// Novas funções para scroll
function mouseWheel(event) {
  if (estado === "jogo") {
    deslocamentoY += event.delta;
    limitarScroll();
  }
}

function keyPressed() {
  if (estado === "jogo") {
    if (keyCode === UP_ARROW) deslocamentoY -= 40;
    if (keyCode === DOWN_ARROW) deslocamentoY += 40;
    limitarScroll();
  }
}

function limitarScroll() {
  deslocamentoY = constrain(deslocamentoY, 0, alturaTotal - height);
}
