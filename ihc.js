// Aluno: Luiz Felipe



function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a - b;
}

function multiplicacao(a,b){
    return a * b;
}

function divisao(a,b){
    if (b ===0){
        return "Não existe divisão por zero"
    }
    return a / b;
}

function numeroPar(numero){
    return numero % 2 ===0 ? "É Par": "Não é Par";
}

function somaItervalo(inicio,fim){
    let soma = 0;
    for(let i = inicio; i <= fim ; i++){soma+=i}
    return soma
}

function fatorial(n){
    if(n ===0 || n ===1 ) {
        return 1;
    }
    let resultado = 1;
    for(let i = n; i > 1; i--){
        resultado*=i;
    }
    return resultado;
}

function contarVogais(vogal){
    let vogais = "aeiouAEIOU";


    let contador = 0;

    for(i = 0;i < vogal.length;i++){
        if(vogais.includes(vogal[i])){
            contador++;
        }
        
    }
    return contador;
}





console.log('Soma:',soma(5,8 ));
console.log('Subtracao:',subtracao(10,7));
console.log('Multiplicação:',multiplicacao(4,6));
console.log('Divisão:',divisao(15,3));
console.log('Divisão:',divisao(15,0));
console.log('Numero Par:',(6));
console.log('Somar Intervalo:',somaItervalo(1,5));
console.log('Fatorial:',fatorial(5));
console.log('Contador de vogais', contarVogais('filipe'));


