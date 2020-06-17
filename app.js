var express = require('express')

var app = express() 

var port = 8000;
app.listen(port, function(){
    console.log(`Server is running at http://localhost:8080`)
})
