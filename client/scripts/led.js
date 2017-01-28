var xhr = new XMLHttpRequest();

var blink = document.querySelector("#blinkBtn");


function blinki(){
    console.log(xhr.readyState)
    xhr.open("GET","http://192.168.0.14:3005/blink", true);
    console.log(xhr.readyState);
    xhr.send();
}

blinkBtn.addEventListener("click",blinki, false);