//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 20';
let listaDeNumeroSorteados = [];
let numeroLimite = 1056 //nao altera 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTestoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto){
    exibirTestoNaTela('h1', 'acertou')
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `você descobriu o numero Secreto com ${tentativas} ${palavraTentativa}`;
    exibirTestoNaTela('p', mensagemTentativas);
    document.getElementById ('reiniciar').removeAttribute('disabled');
  } else{
     if (chute > numeroSecreto){
      exibirTestoNaTela ('p', 'numero secreto menor');
     }else{
      exibirTestoNaTela('p','numero secreto Maior');
     }
     //tentativas = tentativas + 1;
     tentativas++;
     limparCampo()
  }
}

function exibirMensagemInicial() {
  exibirTestoNaTela('h1','Jogo do numero secreto');
  exibirTestoNaTela('p','Escolha um numero entre 1 e 100');
}
exibirMensagemInicial();

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite ){
      listaDeNumeroSorteados = [];
  }

  if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
  } else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log (listaDeNumeroSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo()
  tentativas = 1
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',
  true)
}
