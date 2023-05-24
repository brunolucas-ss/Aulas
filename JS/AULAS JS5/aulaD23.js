// document.title = "AulaD23";

// // h1
// let titulo = document.createElement ('h1');
// titulo.innerHTML = "Aula D23";
// document.body.appendChild(titulo);
// titulo.style.textAlign = 'center'
// titulo.style.color = 'blueviolet'
// titulo.style.backgroundColor = 'black'

// // h2
// let subtitulo = document.createElement ('h2');
// subtitulo.innerHTML = "Aula DOM";
// document.body.appendChild(subtitulo);

// let texto = document.createElement ('p');
// texto.innerHTML = "Meu texto Meu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu textoMeu texto ";
// document.body.appendChild(texto);
// texto.style.backgroundColor = 'blueviolet'
// texto.style.color = 'white'

let titulo = document.createElement ('TituloPrincipal');
TituloPrincipal.innerHTML = "Bom dia";
TituloPrincipal.style.color = 'blueviolet'
TituloPrincipal.style.backgroundColor = "white"
TituloPrincipal.style.textAlign = "center"

const mudarCor = () => {
    let valorP = document.getElementById("Subtitulo")
    valorP.style.color = "red"
    valorP.style.backgroundColor= "blueviolet"
    valorP.style.textAlign= "center"
}

const mudarCor2 = () => {
    let valorP = document.getElementById("Subtitulo")
    valorP.style.color = "white"
    valorP.style.backgroundColor = "silver"
    valorP.innerHTML = "Clique aqui";
    valorP.style.textAlign= "center"
    
}
const Click = () => {
    let valorP = document.getElementById("Subtitulo")
    valorP.style.color = "Silver"
    valorP.style.backgroundColor = "Blueviolet"
    valorP.innerHTML = "Clicou";
    valorP.style.textAlign= "center"
}


// const mudarCor = () => {
//     let valorH2 = document.getElementById("Subtitulo")
//     valorH2.style.color = "red"
//     valorH2.style.backgroundColor= "blueviolet"
//     valorH2.style.textAlign= "center"
// }

// const mudarCor2 = () => {
//     let valorH2 = document.getElementById("Subtitulo")
//     valorH2.style.color = "Silver"
//     valorH2.style.backgroundColor = "Blueviolet"
    
// }
