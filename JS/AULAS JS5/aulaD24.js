const clicar = () => {
    // Selecionando um elemento do HTML
    let nota01 = document.getElementById("nota01");
    let nota02 = document.getElementById("nota02");
    let res = document.getElementById("resultado");
    // Convertendo string para numeros
     let notaNum1 = Number(nota01.value);
     let notaNum2 = Number(nota02.value);
    //  gerando o calculo da média do aluno com os valores que foram convertidos
    let resultado = (notaNum1 + notaNum2) /2;
    // exibindo o resultado
    res.innerHTML = `Sua média é: ${resultado}`
}

