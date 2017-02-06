var options = {
    zone: document.getElementById('zone_joystick'),
    mode:'semi'
    };
var manager = nipplejs.create(options);

var socket = io.connect('/');

manager
.on('added',  (evt, nipple) => console.log("start"))
.on('removed', (evt, nipple) => console.log("remove"))
.on('dir:left', (evt, nipple)=> console.log("left"))
.on('dir:right', (evt, nipple)=> console.log("right"))
.on('dir:up', (evt, nipple)=> {
    socket.emit('forward');
})
.on('dir:down', (evt, nipple)=> console.log("down"));