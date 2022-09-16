var carta1= {
    nome: 'Hulk',
    imagem:'https://img.elo7.com.br/product/original/1081B0E/painel-hulk-g-frete-gratis-hulk.jpg',
    atributos:{
        ataque: 9,
        defesa: 5,
        magia: 8,
    }
}
var carta2= {
    nome: 'Capitão américa',
    imagem:'https://www.hqzona.com.br/wp-content/uploads/2018/03/fmt_94_24_kehp1.jpg',
    atributos:{
        ataque: 7,
        defesa: 10,
        magia: 6,
    }
}
var carta3= {
    nome: 'Feiticeira Escarlate',
    imagem:'https://i.pinimg.com/736x/a2/f3/0b/a2f30ba35ca74be3a0c7a14e863cc114.jpg',
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

    exibirCartaJogador()
}



function obtemAtributoSelecionado(){
    var radioAtributos= document.getElementsByName('atributo');

    for (var i=0; i< radioAtributos.length; i++){
        if(radioAtributos[i].checked== true){
           return radioAtributos[i].value 
        }
    }


}

function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador');
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    // divCartaJogador.style.backgroundImage="url(" + cartaJogador.imagem + ")"; 

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHtml= "<div id='opcoes' class='carta-status'>";
    var opcoesTexto="";
    for( var atributo in cartaJogador.atributos){
      opcoesTexto += "<input type ='radio' name= 'atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>" ;
    };
    var nome= `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML= moldura + nome+ tagHtml + opcoesTexto+ "</div>"
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  