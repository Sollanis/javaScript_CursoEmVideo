
////FUNCTION SEM PASSAGEM DE PARAMETRO
// function soma(n1, n2) {
//     return n1 + n2
// }

// console.log(soma(2)) // caso declara-se apenas um número, o js entende que é indefinido (NaN - Not a Number)



//FUNCTION COM PASSAGEM DE PARAMETRO
function soma(n1= 0, n2= 0) { //pré definição de parâmetros, para caso seja passado apenas um valor
    return n1 + n2
}

console.log(soma(2))