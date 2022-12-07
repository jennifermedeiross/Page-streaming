//  LOGIN COM GOOGLE OU FACEBOOK

const urls = ['https://accounts.google.com/v3/signin/identifier?dsh=S135106958%3A1667686411265880&authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fclient%3Dopera-gx%26q%3Dgoogle%2Blogin%26sourceid%3Dopera%26ie%3DUTF-8%26oe%3DUTF-8&ec=GAlAAQ&hl=pt-BR&flowName=GlifWebSignIn&flowEntry=AddSession', 'https://www.facebook.com']
const loginAuto = document.querySelectorAll('#auto')

function abrirAba (index){
    const win = window.open(urls[index], '_blank')
    win.focus
}