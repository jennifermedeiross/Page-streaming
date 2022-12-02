const botaoMenu = document.querySelector('.botao-menu')
const transformeMenu = document.querySelector('.navegacao')
const menuPerfil = document.querySelector('.perfil')
const transformePerfil = document.querySelector('.menu-perfil')

botaoMenu.addEventListener('click', () => {
    transformeMenu.classList.toggle('navegacao--ativo')
})

menuPerfil.addEventListener('click', () => {
    transformePerfil.classList.toggle('perfil--ativo')
})

