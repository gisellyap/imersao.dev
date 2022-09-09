const numeroSecreto = parseInt(Math.random() * 11);

function Chutar(){
    
     
    var elementoResultado = document.getElementById('resultado');


    var chute = parseInt(document.getElementById('valor').value);
    

    if( chute == 3){
        elementoResultado.innerHTML= 'Parabens, você acertou';
    }else if(chute> 10 || chute<0){
        elementoResultado.innerHTML= 'Desculpe, esse número não é válido! Digite um número de 0 a 10.';
    }else{
        elementoResultado.innerHTML= 'Ah, não foi dessa vez. Tente novamente';
    }
    
}