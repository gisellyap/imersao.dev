function converter(){
    const valorElementoKm = document.getElementById('valorKm');
    const value =valorElementoKm.value;
    const valorKm = parseFloat(value);

    const valorAnoLuz= valorKm * 1.057;
    console.log(valorAnoLuz);

    
}