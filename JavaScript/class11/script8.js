function calcular(){
    var vel = Number(document.querySelector('input#vel').value)
    var res = document.querySelector('div#resultado')
    if (vel > 60){
        res.innerHTML = `Você ultrapassou o limite de velocidade. MULTADO!`
    } else {
        res.innerHTML = `Conduza sempre usando cinto de segurança!`
    }
}
