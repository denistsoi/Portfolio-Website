var express = require('express'),
    http    = require('http');

var app = express();

var server = http.Server(app);

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.render('index', { 
    normalize: "./css/normalize.css",
    reset: "./css/reset.css",
    baseline: "./css/baseline.css",
    style: "./css/style.css", 

  });
});

//     amend: "./css/amend.css"

server.listen(process.env.PORT || 3000);

