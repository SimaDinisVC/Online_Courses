function soma(){
    var tn1 = document.querySelector('input#txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    s = n1+n2
    res.innerHTML = `${n1} somado com ${n2} é igual a ${s}.`
}
function multiplicação(){
    var tn3 = document.querySelector('input#txtn3')
    var tn4 = document.querySelector('input#txtn4')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    m = n3*n4
    resu.innerHTML = `${n3} multiplicado por ${n4} é igual a ${m}.`
}
function divisão(){
    var tn5 = document.querySelector('input#txtn5')
    var tn6 = document.querySelector('input#txtn6')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    m = n5/n6
    resul.innerHTML = `${n5} dividido por ${n6} é igual a ${m}.`
}
function expenoneciação(){
    var tn7 = document.querySelector('input#txtn7')
    var tn8 = document.querySelector('input#txtn8')
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    m = n7**n8
    result.innerHTML = `${n7} exponenciado por ${n8} é igual a ${m}.`
}