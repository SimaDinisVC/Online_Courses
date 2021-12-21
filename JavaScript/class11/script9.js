function verificar(){
    var pais = document.getElementById('pais')
    var res = document.querySelector('div#res')
    var local = document.querySelector('div#local')
    local.innerText = `A viver em ${pais}.`
    if (pais == `Portugal`){
        res.innerText = `Você é Português!`
    } else {
        res.innerText = `Você é Estrangeiro!`
    }
}