function contar(){
    let ini = window.document.getElementById('txti') //id do campo  que vai receber
    let fim = window.document.getElementById('txtf') //id do campo  que vai receber
    let passo = window.document.getElementById('txtp')//id do campo  que vai receber
    var msg = document.querySelector('#res')//  msg.innerHTML= ``

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else{
        msg.innerHTML = 'Contando...<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            msg.innerHTML = 'Passo Inválido! Será considerado PASSO 1. <br>'
            p = 1
        }
        if(i < f){
            for (let c = i; c <= f; c += p) { //contador ganha um passo
                msg.innerHTML += `${c} \u{1F604}`
            }
        } else{
            for(let c = i; c>=f; c -= p){ //contador ganha um passo
                msg.innerHTML += `${c} \u{1F604}`
            }
        }
        msg.innerHTML += `\u{1F3C1}`      

    }


}
