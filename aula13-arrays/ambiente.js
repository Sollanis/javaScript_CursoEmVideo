// let num = [5,7,9]
// num [3] = 6
// num.sort()// SE COLOCARMOS O SORT DEPOIS DE ADD UM ELEMENTO, ELE ORGANIZA E DEPOIS ADD O VALOR

// console.log(`Nosso vetor é o ${num}`);
// console.log(`Ele possui ${num.length} elementos`);
// console.log(`O primeiro valor do vetor é ${num[0]}`);

// num.push(10)
// console.log(`Inserindo um valor, nosso vetor fica: ${num}`);
// console.log(`E agora possui ${num.length} elementos`);


// //FOR NORMAL
// for (let i=0 ; i <num.length ; i++){ //INICIALIZAÇÃO; CONDIÇÃO; INCREMENTO
//     console.log(`A posição ${i} tem o valor ${num[i]}`)
// }

// //FOR PARA ARRAYS E OBJECTS
// for (let i in num) {
//     console.log(`A posição ${i} tem o valor ${num[i]}`)
//     }



let num = [5,7,9] //OBS: O INDICE COMEÇA EM ZERO(0)
num [3] = 6
let i = num.indexOf(7)
console.log (`O valor X está na posição ${i}`)

if (i == -1) {
    console.log ('Valor não encontrado!')
} else {
    console.log (`Valor buscado está na posiçaõ ${i}`)
}
