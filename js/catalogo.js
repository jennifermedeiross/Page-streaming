const docQS = function (classe) {
    return document.querySelector(classe)}

// MENU

const [botaoMenu,transformeMenu] = [docQS('.botao-menu'), docQS('.navegacao')] // MENU LATEAL ESQUERDO

const [menuPerfil, transformePerfil] = [docQS('.botao-perfil'), docQS('.perfil')] // MENU LATEAL DIREITO

const descricaoTipo = ['navegacao', 'perfil']


function menuLateral (botao, transforme, tipo) {
    botao.addEventListener('click', () => {
        transforme.classList.toggle(`${tipo}--ativo`)
})}

menuLateral(botaoMenu, transformeMenu, descricaoTipo[0])
menuLateral(menuPerfil, transformePerfil, descricaoTipo[1])

// TROCAR IMAGEM DE FUNDO

function trocaFundo (pagina,midia) {
    const recomend = document.querySelectorAll(`.recomend_midia_${pagina}`)
    const img = recomend[midia].src
    const body = `body_${pagina}`
    document.body.style.backgroundImage="url" + `(${img})`
}
