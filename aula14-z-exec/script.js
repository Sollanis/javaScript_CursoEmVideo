let num = window.document.querySelector('input#txtn') //var do campo inserir numero
let disp = document.querySelector('select#display') //var do campo add
let res = document.querySelector('div#result')//var do campo resultado
let array = []

function isNumero(nm){
    if (Number(nm) >=1 && Number(nm) <= 100 ) {
        return true
    } else {
        return false
    }
}

function isLista(nm, lis){
    if (lis.indexOf(Number(nm)) != -1 ) {
        return true
        
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !isLista(num.value, array)) {
         array.push(Number(num.value))
         let item = document.createElement('option')
         item.text = `Valor ${num.value} adicionado`
         disp.appendChild(item)
         res.innerHTML = '' //limpa o campo resultado
    } else {

        window.alert(`[ERRO!] Valor inválido ou Já encontrado na lista.`)   
    }
    num.value = ''
    num.focus() // faz o cursos piscar no elemento
}

function finalizar(){
    if (array.length == 0 ) {
        window.alert(`[ERRO!] A lista está vazia. Adicione valores para continuar.`)
        
    } else {
        let tot = array.length
        /* O sistema faz a varredura e testes em sequencia.Se existir apenas 1 valor ele mesmo será o maior e o menor. */
        let maior = array[0] 
        let menor = array[0]
        let soma = 0 
        let media = 0


        for ( let i in array){
            if(array[i] > maior){
                maior = array[i]
            } 
            if (array[i] < menor) {
                menor = array[i]
            }

            soma += array[i]
        }
        media = soma / tot

        res.innerHTML=''
        res.innerHTML +=`<p> Ao todo tempos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }   
}