function Converter(){
    var valorElemento = document.getElementById('valor');
    var valor= valorElemento.value;
    var valorEmDolar= parseFloat(valor);
    
    var valorEmReal= valorEmDolar * 5.23;
    console.log(valorEmReal);


    var valorConvertido = document.getElementById('valorConvertido');
    var resultado = 'O resultado em real é R$ ' + valorEmReal;

    valorConvertido.innerHTML = resultado;

}