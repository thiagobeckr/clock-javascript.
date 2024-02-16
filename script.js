function carregar () {
var msg = document.getElementById ('msg')
var img = document.getElementById ('imagem')
var data = new Date()
//var hora = 9
//var min = 10
var hora = data.getHours()
var min = data.getMinutes()
var msg2 = document.getElementById ('msg2')

msg.innerHTML = `Agora são: <strong>${hora}:${min}</strong>`

if (hora <6) {
    img.src = 'img/fotomadrugada.png'
    document.body.style.background = '#15191c'
    msg2.innerHTML = `<strong>Boa madrugada!</strong>`


} else if (hora >=6 && hora <12) {
    img.src = 'img/fotomanha.png'
    document.body.style.background = '#ffd096'
    msg2.innerHTML = `<strong>Bom dia!</strong>`

} else if (hora >= 12 && hora <18) {
    img.src = 'img/fototarde.png'
    document.body.style.background = '#4d8cbd'
    msg2.innerHTML = `<strong>Boa tarde!</strong>`

} else {
    img.src = 'img/fotonoite.png'
    document.body.style.background = '#1c1b16'
    msg2.innerHTML = `<strong>Boa noite!</strong>`
   
} 

if (hora <= 9 && min <= 9) {
    msg.innerHTML = `Agora são: <strong>0${hora}:0${min}</strong>`
} else if (hora <= 9) {
    msg.innerHTML = `Agora são: <strong>0${hora}:${min}</strong>`
} else if (min <= 9) {
    msg.innerHTML = `Agora são: <strong>${hora}:0${min}</strong>`
} else {
    msg.innerHTML = `Agora são: <strong>${hora}:${min}</strong>`
}


var segundosRestantes = 60 - data.getSeconds();


setTimeout(function () {
    
    location.reload();
}, segundosRestantes * 1000);

}    
