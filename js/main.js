const docQS = function (classe) {
    return document.querySelector(classe)}

function efeitoDigitado (elemento) {
    const textoLista = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoLista.forEach((letra, i) => {
        setTimeout( () => elemento.innerHTML += letra, 350 * (i+1))
    });
    console.log(textoLista)
}

const titulo = docQS('.titulo-home')

efeitoDigitado(titulo)