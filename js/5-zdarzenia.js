/*function nowaFunkcja() {
    alert('kliknąleś w paragraf');
}*/

var secPar = document.getElementById('parSecond');

function changeBackground() {
    parSecond.style.backgroundColor = "#00ff00";
}

function changeBackgroundDB() {
    parSecond.style.backgroundColor = "#0000ff";
}


parSecond.onclick = changeBackground;

parSecond.ondblclick = changeBackgroundDB;

parSecond.addEventListener('dblclick', changeBackgroundDB);

parSecond.getElementById('parFirst').children[3].addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
})