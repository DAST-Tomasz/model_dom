'use strict';

var naglowek = document.getElementById('main-header');

console.log(naglowek.innerText); // pobieramy text wewnątrz naglowka

naglowek.innerText = "Tekst nagłówka po zmianie"; // możliwość wsadzenie nowego tekstu - tylko text

naglowek.innerHTML = "Tekst ze znacznikiem <span>span</span>"; // możliwość dodania znaczników html w tekscie - zamiana starego na nowy - wywala wszystko

naglowek.outerHTML = "<h2>Tekst ze znacznikiem <span>span</span></h2>"; // usuwanie i podmienianie elementu;

//naglowek.outerHTML = "<h2>" + naglowek.innerText + "</h2>";

document.getElementsByTagName('h2')[0].id = "main-header-after-change";

document.getElementsByTagName('h2')[0].className = "header header-default";

console.log(document.getElementsByTagName('h2')[0].classList);

document.getElementsByTagName('h2')[0].style.border = "2px red solid";