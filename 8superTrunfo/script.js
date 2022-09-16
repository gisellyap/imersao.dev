var carta1= {
    nome: 'Hulk',
    atributos:{
        ataque: 9,
        defesa: 5,
        magia: 8,
    }
}
var carta2= {
    nome: 'Capitão américa',
    atributos:{
        ataque: 7,
        defesa: 10,
        magia: 6,
    }
}
var carta3= {
    nome: 'Feiticeira Escarlate',
    atributos:{
        ataque: 10,
        defesa: 5,
        magia: 9,
    }
}

var cartas =[carta1, carta2, carta3];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta(){
    var numeroMaquina= parseInt(Math.random()* 3);
    cartaMaquina =cartas[numeroMaquina];
    


    var numeroJogador= parseInt(Math.random()* 3);
    while(numeroMaquina == numeroJogador){
        var numeroJogador= parseInt(Math.random()* 3);
    }

    cartaJogador =cartas[numeroJogador];
    console.log(cartaJogador);

    document.getElementById('btnSortear').disabled= true;
    document.getElementById('btnJogar').disabled= false;

    exibirOpcoes()
}

function exibirOpcoes(){
    var opcoes= document.getElementById('opcoes');
    var opcoesTexto="";

    for( var atributo in cartaJogador.atributos){
      opcoesTexto += "<input type ='radio' name= 'atributo' value='" + atributo + "'>" + atributo;
    };

    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
    var radioAtributos= document.getElementsByName('atributo');

    for (var i=0; i< radioAtributos.length; i++){
        if(radioAtributos[i].checked== true){
           return radioAtributos[i].value 
        }
    }


}

function jogar(){
    var atributoSelecionado= obtemAtributoSelecionado();
    var elementoresultado= document.getElementById('resultado');
    var valorCartaJogador= cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina= cartaMaquina.atributos[atributoSelecionado];

    if(valorCartaJogador> valorCartaMaquina){
        elementoresultado.innerHTML= 'Você venceu!'
    }else if (valorCartaMaquina > valorCartaJogador){
        elementoresultado.innerHTML='Você perdeu, a carta da maquina é maior!'
    }else{
        elementoresultado.innerHTML= 'Empatou!'
    };



    console.log(cartaMaquina);
}