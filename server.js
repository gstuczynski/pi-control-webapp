const PORT = 3000;


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var piSocket = require('socket.io-client')//('http://192.168.0.14:3005',{reconnect: true});


var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');



app.use('/', mainRouter);
app.use('/api', apiRouter);

app.set('view engine', 'html');
app.set('views', __dirname +'/client');

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/client'));




server.listen(PORT, ()=>{
  console.log('Listening on port: '+ PORT);
});


io.on("connection", (socket)=>{
 var pi = piSocket.connect('http://192.168.0.14:3333')
pi.once("connect",()=>{
  console.log("client connected");

  socket
  .on("forward",(state)=>{
    pi.emit('forward')
    console.log("forward");})
  .on("stop",(state)=>{
   // console.log("stop");
   // pi.emit('stop')
  })
  .on("reverse",(state)=>{
    console.log("reverse");
    pi.emit('reverse')})
  .on("left",()=>{
    console.log("left");
    pi.emit('left')})
  .on("right",()=>{
    console.log("right");
    pi.emit('right')})
  .on("bulbOn",()=>{
    console.log("bulbOn");
    pi.emit('bulbOn')})
  .on("bulbOff",()=>{
    console.log("bulbOff");
    pi.emit('bulbOff')})
});
})