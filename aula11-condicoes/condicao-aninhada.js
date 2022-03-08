// var idade = 17
// console.log(`Você tem ${idade} anos.`)
// if (idade <16) {
//     console.log('Não Vota!')
// } else if (idade < 18) {
//     console.log('Voto opcional.')
// }else {
//     console.log('Voto Obrigatório.')
// }
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia.')
} else if (hora <18 ) {
    console.log('Boa tarde.')
} else {
    console.log('Boa noite.')
}