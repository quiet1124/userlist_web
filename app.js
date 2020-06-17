var express = require('express')
var path = require('path')
var app = express() 

app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded())
app.use(express.json())

app.get('/hello', (request, response)=>{
    // console.log(request)
    response.render('hello.ejs')
})

// console.log(path.join(__dirname, '/views'))

var port = 8000;
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:8080`)
})
