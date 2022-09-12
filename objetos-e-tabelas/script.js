const rafa ={
    nome: 'Rafa',
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0,

}

const paulo ={
    nome: 'Paulo',
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0,

}

const guilherme ={
    nome: 'Guilherme',
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0,

}


function calculaPontos(jogador){
    const pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}
rafa.pontos= calculaPontos(rafa);
paulo.pontos= calculaPontos(paulo);
guilherme.pontos= calculaPontos(guilherme);

var jogadores =[rafa, paulo, guilherme];


function exibeJogadoresNatela(jogadores){
    var elemento = '';
    for(var i= 0; i< jogadores.length; i++){
        elemento += '<tr><td>'+ jogadores[i].nome+ '</td>'
        elemento +=  '<td>'+jogadores[i].vitorias+'</td>'
        elemento +=  '<td>'+ jogadores[i].empates+'</td>'
        elemento += '<td>'+jogadores[i].derrotas+'</td>'
        elemento += '<td>'+jogadores[i].pontos+'</td>'
        elemento += '<td><button onClick="adicionarVitoria('+ i +')">Vitória</button></td>'
        elemento += '<td><button onClick="adicionarEmpate('+ i +')">Empate</button></td>'
        elemento += '<td><button onClick="adicionarDerrota('+ i +')">Derrota</button></td>'
        elemento +='</tr>'
    }

    var tabelaJogadores = document.getElementById('tabelaJogadores');
    tabelaJogadores.innerHTML= elemento;
}

exibeJogadoresNatela(jogadores);

function adicionarVitoria(i){
     var jogador= jogadores[i];
     jogador.vitorias++;
     jogador.pontos = calculaPontos(jogador);
     exibeJogadoresNatela(jogadores)
}

function adicionarEmpate(i){
    var jogador= jogadores[i];
     jogador.empates++;
     jogador.pontos = calculaPontos(jogador);
     exibeJogadoresNatela(jogadores)
}

function adicionarDerrota(i){
    var jogador= jogadores[i];
     jogador.derrotas++;
     exibeJogadoresNatela(jogadores)
}