function tabuada(){
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    if (num.value.length == 0) {
        window.alert('[ERRO] Digite um número!')
    }else{
        let n = Number(num.value); //TRANSFORMAR VALOR RECEBIDO (STRING) PARA NÚMERO
        let c = 1
        tab.innerHTML = '' //ANTES DE FAZER O SOMATÓRIO, A TAG-ELEMENTO <selection> RECEBE NADA
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            tab.appendChild(item) //INSERIR VALOR DENTRO DA TAG-ELEMENTO <selection>
            c++

        }
    }
}