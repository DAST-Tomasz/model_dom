// js on press arrow

var color = document.getElementById('main-header');

document.onkeydown = checkKeyDown;

function checkKeyDown(e) {
    switch (e.keyCode) {
        case 37:
            color.style.color = "#00ff00";
            //alert('cos');
            break;    
        case 38:
            color.style.color = "#0000ff";
            //alert('cos');
            break;
        case 39:
            color.style.color = "#ff0000";
            //alert('cos');
            break;
        case 40:
            color.style.color = "#c0c0c0";
            //alert('cos');
            break;
    
    }
};