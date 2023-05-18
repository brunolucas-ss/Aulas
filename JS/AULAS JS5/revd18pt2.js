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
