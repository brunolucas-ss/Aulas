const valores = [
{
    produto:"Celular",
    valor: 4000,
},

{
    produto:"tv",
    valor: 2400,
},

{
    produto:"pc",
    valor: 5000,
},
]
// 10% valores;

let novosValores= valores.map((nv) => nv.valor * 1.1);
console.log(novosValores)
console.log(typeof valores)
console.log(valores)

let idadeCandidatos =[14, 15, 18 , 17, 23, 29, 45];
// 15 ~ 29 anos
let alunosAprovado = idadeCandidatos.filter((idade) =>{
    return idade >= 15 && idade <= 29;
});
console.log(alunosAprovado)