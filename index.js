var express = require('express'),
    http    = require('http');

var app = express();

var server = http.Server(app);

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

var site = {
  title: "Eric Chi Wai Tsoi",
  styles: {
    normalize: "./css/normalize.css",
    reset: "./css/reset.css",
    baseline: "./css/baseline.css",
    style: "./css/style.css"
  },
  sidebarOptions: {
    {name: "Portfolio"},
    {name: "About"},
    {name: "Blog"},
    {name: "Contact"}
  }
};



app.get('/', function(req,res) {
  res.render('index', { 
    site: site
  });
});

app.get('/guide', function(req, res) {
  res.render('guide', { 
    site: site    
  });
})


// Router handles 


server.listen(process.env.PORT || 3000);

