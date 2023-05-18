// ex1
const 
 valores= [1, 2, 3, 4, 5];
let novosValores= valores.map((nv) => nv * 2);
console.log(novosValores)
console.log("------------------")

// ex2

let num2 =[]

// ex3
let Frutas = ["Maçã", "Banana", "Laranja","Kiwi"];
const nomes =(nomes) => {
    return console.log(`Olá aluno: ${nome} está na chamada num:${ind}`)
}
Frutas.forEach((nomes) => {
    console.log(`${nomes} `)
});
console.log("------------------");

// ex4

const InfoCandidatos = [
{ nome: 'John', idade: 20 },
{ nome: 'Jane', idade: 25 }, 
{ nome: 'Mark', idade: 22 },
]

InfoCandidatos.forEach(info => {
    console.log(`${info.nome}  ${info.idade} `)
});
console.log("------------------");


// ex5
const InfoCandidato = [
    { nome: 'John', idade: 20 },
    { nome: 'Jane', idade: 25 }, 
    { nome: 'Mark', idade: 22 },
    ];

    
    const nome = InfoCandidato.map(InfoCandidato=>InfoCandidato.nome)
    console.log (nome)
    console.log("------------------");