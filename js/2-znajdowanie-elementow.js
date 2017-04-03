'use strict';

// znajdowanie konkretnego elementu id w dokumencie
var parFirst = document.getElementById('parFirst');
console.log(parFirst);

// wyświetla kolekcje elementow podobnie jak tablica - ale tylko do odczytu, nie działa pop i push.
var linki = document.getElementsByClassName('superlink');
console.log(linki[0]);

// wyświetla wszystkie znaczniki a
var linkPoZnaczniku = document.getElementsByTagName('a')
console.log(linkPoZnaczniku); // ile linków jest na stronie dodatek .length

var pierwszyLink = document.querySelector('.link'); // odwołanie po selektorach css'owych

// tylko pierwszy link z http
var pierwszyLink = document.querySelector('[href*="http://"]');
console.log(pierwszyLink);

// wszystkie linki o parametrze href
var wszystkieLinki = document.querySelectorAll('#parFirst [href]');
console.log(wszystkieLinki);

// wszystkie linki ze zbioru powyżej
wszystkieLinki.forEach(function (element, index) {
    console.log(element.innerHTML); // wszystko zwraca co jest poniżej znacznika html
})