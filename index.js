var express = require('express');

//APP setup 

var app=express();
var server= app.listen(4000,function(){
    console.log('lisening to requests on port 4000');
});

//static files
app.use(express.static('public'));