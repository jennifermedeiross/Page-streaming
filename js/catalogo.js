// MENU

const [botao, ativar] = [document.querySelectorAll('.botao'),
                        document.querySelectorAll('#ativar')]

console.log(botao)
botao.forEach((element, index) => {

    const tipoBotao = ativar[index].className
    const classe = document.querySelector(`.${tipoBotao}`)

    element.addEventListener('click', () => {
        classe.classList.toggle(`${tipoBotao}--ativo`)
})})

// TROCAR IMAGEM DE FUNDO

const catalogo = document.querySelector('.navegacao_fsd')

catalogo.addEventListener('click', (evento) => {
    const img = evento.target.currentSrc
    document.body.style.backgroundImage="url" + `(${img})`
    
})
