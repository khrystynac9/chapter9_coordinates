window.onload = init;
function init() {
    var map = document.getElementById("map");
    map.onmousemove = showCoords;
}

function showCoords(eventObj) {
    var coor = document.getElementById("coords");
    var x = eventObj.clientX;
    var y = eventObj.clientY;
    coor.innerHTML = "map coordinates: " + x +", " + y;
}

function timerHandler() {
    alert('What are you doing???????');
}

setTimeout(timerHandler, 5000);