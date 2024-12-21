var ad = prompt("Adinizi daxil edin: ")
var soyad = prompt("Soyadinizi daxil edin: ")
var yas = +prompt("Yasinizi daxil edin: ")
var istifadeci = ad + ' ' + soyad

document.getElementById('istifadeci').innerHTML = 'Istifadeci: ' + istifadeci
document.getElementById('yas').innerHTML = 'Yas: ' + yas