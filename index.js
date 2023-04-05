var express = require('express');
var ejs = require('ejs');
const path = require('path');
var app = express();

app.use('/css', express.static(path.join('node_modules','bootstrap','dist','css')));
app.use('/image', express.static(path.join('public','image')));
app.use('/css', express.static(path.join('public','css')));


app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index');
});
app.get('/about',function(req,res){
    res.render('about');
});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.listen(8080, () => {
    console.log('Listening on port ' + 8080);
  });
