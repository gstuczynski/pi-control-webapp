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


 var pi = piSocket.connect('http://192.168.0.14:3013')
//console.log(pi)
pi.once("connect",()=>{
  console.log("c")
pi.emit('test',{x:'x'},(msg)=>console.log(msg+"msg"))
})
   // piSocket.emit('forward',{},(data, err)=> console.log(data+err))

io.on("connection", (socket)=>{


  console.log("client connected");
  socket.on("forward",(state)=>{
  
    console.log("poszedl x");
  })
});