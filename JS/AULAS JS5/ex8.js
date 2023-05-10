let altura = prompt("Digite sua altura em metros:");
let peso = prompt("Digite seu peso em quilogramas:");
altura = parseFloat(altura);
peso = parseFloat(peso);
let imc = peso / (altura * altura);
if (imc >= 18.5 && imc <= 24.9) {
  console.log("Seu IMC é " + imc.toFixed(2) + ", e está dentro do intervalo saudável.");
} else {
  console.log("Seu IMC é " + imc.toFixed(2) + ", e está fora do intervalo saudável.");
}