'strict mode';
/*// dla rodzeństwa może być tylko jeden rodzic
var parFirst = document.getElementById('parFirst');
var firstParId = parFirst.getAttributeNode('id');

console.log(firstParId);
console.log(parFirst.parentNode);

console.log(parFirst.childNodes[1]); // bierze pod uwagę wszystkie spacje, entery, komentarze. Żeby odwołać się do konkretnego p trzeba podać numer węzła czyli w tym momencie 1, bo 0 wyszuka pierwszy enter.

console.log(parFirst.children); // kolekcja znaczników html - bez tekstów.

// pierwsze i ostatnie dziecko - z wszystkich dzieci
console.log(parFirst.firstChild);
console.log(parFirst.lastChild);

// pierwszy i ostatni znacznik html
console.log(parFirst.firstElementChild);
console.log(parFirst.lastElementChild);

var link = parFirst.children[1];
console.log(link);

console.log(link.nextSibling); // br
console.log(link.previousSibling); // text

console.log(link.nextElementSibling); // br
console.log(link.previousElementSibling); // pr (szuka tagi elementowe)

var parFirstNodes = parFirst.childNodes;

for (var i = 0; i < parFirstNodes.length; i++) {
    console.log(parFirstNodes[i].nodeType);

    if (parFirstNodes[i].nodeType == 8) {
        console.log('W tym momencie jest komentarz ' + parFirstNodes);
    }
}

// stworzenie przycisku
var btn = document.createElement("button");
var btnText = document.createTextNode("Clic me");
var btnClass = document.createAttribute("class");

// przypisanie wartości
btnClass.value = 'button-class';
btn.appendChild(btnText);
btn.setAttributeNode(btnClass);

parFirst.appendChild(btn);
parFirst.insertBefore(btn, parFirst.children[2]); // wsadzenie przycisku miedzy linkami*/

// usunięcie atrybutu z wszystkich linków
var allLinks = document.getElementsByTagName('a');
console.log(allLinks);

for (var i = 0; i<allLinks.length; i++) {
    allLinks[i].removeAttribute('class');
}
