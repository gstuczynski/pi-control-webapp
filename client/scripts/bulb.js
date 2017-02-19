var xhr = new XMLHttpRequest();

var bulbOnBtn = document.querySelector("#bulbOn");
var bulbOffBtn = document.querySelector("#bulbOff");

function bulbOn(){
    console.log(xhr.readyState)
    xhr.open("GET","http://192.168.0.14:3005/blink", true);
    console.log(xhr.readyState);
    xhr.send();
}


bulbOnBtn.addEventListener("click",()=>{
    socket.emit('bulbOn');
    console.log("bulbOn")
}, false);
bulbOffBtn.addEventListener("click",()=>{
    socket.emit('bulbOff');
    console.log("bulbOff")
}, false);