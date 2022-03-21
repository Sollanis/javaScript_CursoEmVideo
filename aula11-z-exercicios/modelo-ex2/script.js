function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#result')
    if (fano.value.length == 0 || Number(fano.value) > ano_atual) {
        window.alert('[ERROR] Verifique o Ano de Nascimento.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano_atual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//.createElement, cria um elemento especifico la no HTML
        img.setAttribute('id','foto')
        
        if (fsex[0].checked) {
            genero= 'Homem'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src','fotos/menino.jpg')
            } else if (idade <50) {
                //homem
            } else {
                //idoso
            }

        } else if (fsex[1].checked){
            genero= 'Mulher'
            if (idade >=0 && idade < 12) {
                //menina
            } else if (idade <50) {
                //mulher
            } else {
                //idosa
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que é ${genero} com ${idade} anos de idade.`
        res.appendChild(img)//aparecer a imagem addionada

    }

}