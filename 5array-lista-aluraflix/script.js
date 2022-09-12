// var listaFilmes= ["Homem de ferro", "Velozes e furiosos", "Se ela dança eu danço"];

// listaFilmes.push('Harry Potter')


// //  valor inicial           condição             expressão final
// for (var indice=0; indice< listaFilmes.length ; indice++){
//     document.write('<p>' + listaFilmes[indice] + '</p>');

// }


var listaFilmes= ['https://mb.web.sapo.io/87a878aa83a02a21bef1229c082564d281ef2cd6.jpg', 'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2021/04/14135442/Velozes-e-furiosos-9.jpeg', 'https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg',]

for(var i= 0; i< listaFilmes.length; i++){
    document.write('<img src=' +listaFilmes[i]+ '>');
}