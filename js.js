var resultado = document.getElementById('resultado')

function calcular(tipo, valor){

    if( tipo === 'acao'){
        if(valor === 'c') {
            resultado.value = ''
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            resultado.value += valor
        }
        if(valor === '='){
            var valorCampo = eval(resultado.value)
            resultado.value = valorCampo
        }
    }else if(tipo === 'valor'){
        resultado.value += valor 
    }
}