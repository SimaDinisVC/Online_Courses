//a.addEventListener('click', clicar)
//a.addEventListener('mouseenter', entrar)
//a.addEventListener('mouseout', sair) envés de meter no código HTML na div isto 
function clicar(){
    var a = document.querySelector('div#area')
    a.innerText = 'Cliquei!'
    a.style.background = 'rgb(212, 56, 56)'
}
function entrar(){
    var a = Document.querySelector('div#area')
    a.innerText = 'Entrei!'
}
function sair(){
    var a = document.querySelector('div#area')
    a.innerText = 'Interaja...'
    a.style.background = 'rgb(42, 139, 42)'
}