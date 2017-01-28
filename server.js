const PORT = 3000;

var express = require('express');

var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use('/', mainRouter);
app.use('/api', apiRouter);

app.set('view engine', 'html');
app.set('views', __dirname +'/client');

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/client'));


app.listen(PORT, function(){
  console.log('Listening on port: '+ PORT);
});
