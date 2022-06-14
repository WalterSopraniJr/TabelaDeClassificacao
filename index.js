var walter = { nome: "Walter", vitoria: 0, empate: 0, derrota: 0, pontos: 0 };
var bia = { nome: "Bia", vitoria: 0, empate: 0, derrota: 0, pontos: 0 };
var johnny = { nome: "Johnny", vitoria: 0, empate: 0, derrota: 0, pontos: 0 };

walter.pontos = calculaPontos(walter);
bia.pontos = calculaPontos(bia);
johnny.pontos = calculaPontos(johnny);

function calculaPontos(jogador) {
  var pontos = jogador.vitoria * 3 + jogador.empate;
  return pontos;
}

var jogadores = [walter, bia, johnny];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitoria + "</td>";
    elemento += "<td>" + jogadores[i].empate + "</td>";
    elemento += "<td>" + jogadores[i].derrota + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitoria++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empate++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrota++;
  exibeJogadoresNaTela(jogadores);
}
