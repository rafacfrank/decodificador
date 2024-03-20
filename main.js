

function botaoEncriptar() {
    const textoEntrada = document.querySelector('.input-texto').value
    const arrayListaTexto = textoEntrada.split('')
    const arrayListaEncriptada = []
    const outputAreaTexto = document.querySelector('.funcionalidades__container__outputs__caixaresultado')

    const areaOculta = document.querySelector('#image-search')
    const areaVisivel = document.querySelector('#teste')

    
    for (let i = 0; i < arrayListaTexto.length; i++) {
        if (arrayListaTexto[i] === 'a') {
          arrayListaEncriptada.push('ai')
        } else if (arrayListaTexto[i] === 'e') {
          arrayListaEncriptada.push('enter')
        } else if (arrayListaTexto[i] === 'i') {
          arrayListaEncriptada.push('imes')
        } else if (arrayListaTexto[i] === 'o') {
          arrayListaEncriptada.push('ober')
        } else if (arrayListaTexto[i] === 'u') {
          arrayListaEncriptada.push('ufat')
        } else {
          arrayListaEncriptada.push(arrayListaTexto[i])
        }
      }

      
      areaOculta.style.display = 'none'
      areaVisivel.style.display = 'block'
      outputAreaTexto.innerHTML = arrayListaEncriptada.join('')
      console.log(outputAreaTexto)

}



function botaoDesencriptar() {
    const textoEntrada = document.querySelector('.input-texto').value
    const outputAreaTexto = document.querySelector('.funcionalidades__container__outputs__caixaresultado')

    const decripitado = textoEntrada.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')


    outputAreaTexto.innerHTML = decripitado
}

