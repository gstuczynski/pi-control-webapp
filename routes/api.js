var express = require('express');
var router = express.Router();
var xhr = require('xhr2');


router.get('/led-blink', function(require, response){
    console.log("led blink")
    response.send("led blink").status(200);
    console.log(xhr.readyState)
    xhr.open("GET","http://192.168.0.14:3005/blink", true);
    console.log(xhr.readyState);
    xhr.send();
});




module.exports = router;