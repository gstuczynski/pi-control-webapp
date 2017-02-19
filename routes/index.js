var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
    response.render('index.html');
});

router.get('/motion', function(require, response){
    console.log("motion")
});

module.exports = router;