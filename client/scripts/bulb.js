var xhr = new XMLHttpRequest();

var bulbOnBtn = document.querySelector("#bulbOn");
var bulbOffBtn = document.querySelector("#bulbOff");
bulbOnBtn.addEventListener("click", () => {
    socket.emit('bulbOn');
}, false);
bulbOffBtn.addEventListener("click", () => {
    socket.emit('bulbOff');
}, false);