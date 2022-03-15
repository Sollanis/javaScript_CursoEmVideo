function carregar(){
var msg = window.document.querySelector("#msg")
var img = window.document.querySelector("#img")
var data = new Date() //traz a data atual
var hora = data.getHours() //pega apenas as horas da data atual
msg.innerHTML= `Agora são <strong>${hora} horas. </strong>`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src ='fotos/manha.jpg' //img.src: troca a imagem
        document.body.style.backgroundColor='#E4B49E' //.style.backgroundColor: troca a cor de fundo
    } else if (hora >= 12 && hora <18){
        //BOA TARDE
        img.src ='fotos/tarde.jpg'
        document.body.style.backgroundColor='#EE94A1'
        
    }else{
        //BOA NOITE
        img.src='fotos/noite.jpg'
        document.body.style.backgroundColor='#2A3E70'
    }
}
