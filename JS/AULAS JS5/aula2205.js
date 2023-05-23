class Animal {
    constructor(Especie, Nome, Idade, Cor, Raça) { 
        this.Especie= Especie;
        this.Nome= Nome; 
        this.Idade= Idade;
        this.Cor= Cor;
        this.Raça= Raça;
    }
}

let Cachorro1 = new Animal("Cachorro", "Zeus", 7, "Cinza", "American Bully")
console.log(Cachorro1)
// ---------------------------------
console.log("")
// ---------------------------------
let Gato1 = new Animal("Gato", "Athena", 4, "Preto-Branco", "Siâmes")
console.log(Gato1)
// ---------------------------------
console.log("")
// ---------------------------------
let Passaro1 = new Animal("Pássaro", "Louro", 6, "Verde-Amarelo", "Papagaio")
console.log(Passaro1)
// ---------------------------------
console.log("")
// ---------------------------------
console.log(`O ${Passaro1.Nome} é um dos animais mais inteligentes de sua Espécie`)
// ------------------------------
console.log("")
// ---------------------------------
class Carro {
    constructor(Marca, Modelo, Ano, Cor, Portas) { 
        this.Marca= Marca;
        this.Modelo= Modelo; 
        this.Ano= Ano;
        this.Cor= Cor;
        this.Portas= Portas;
    }
}

let Carro1 = new Carro("Fiat", "Mobi", 2021, "Vermelho", "2p")
console.log(Carro1)
// ---------------------------------
console.log("")
// ---------------------------------
let Carro2 = new Carro("Honda", "Civic", 2020, "Preto", "4p")
console.log(Carro2)
// ---------------------------------
console.log("")
// ---------------------------------
let Carro3 = new Carro("Hyundai", "Sonata", 2019, "Prata", "4p")
console.log(Carro3)
// ---------------------------------
console.log("")
// ---------------------------------
console.log(`O ${Carro2.Modelo} É um dos carros que eu gostaria de ter, por conta do conforto `)
