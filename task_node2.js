 var express = require('express');
var request = require('request');
var app = express();

app.set('view engine','ejs');

var options = {
            url:'https://api.github.com',
            method:'GET',
            headers:{
              'Accept': 'application/json',
              'Accept-charset': 'utf-8',
              'User-Agent':''
            }

};

var option1 = {
                  url:'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}',
                  method:'GET',
                  headers:{
                  'Accept':'application/json',
                  'Accept-charset':'utf-8',
                  'User-Agent':''

}
};



app.get('/a',function(req,res) {
res.sendFile( __dirname +'/data.html');
});

app.get('/data',function(req,res)
{
  var mom = req.query.search;
  var opt = "https://api.github.com/search/repositories?q="+mom
var options2 ={
                url:opt,
                method:'GET',
                headers:{
                  'Accept':'application/json',
                  'Accept-charset':'utf-8',
                  'User-Agent':''
                }
};
  request(options2,function(error,response,body)
{
  var j = JSON.parse(body).items;
console.log(j);
res.render('new1',{jdata:j,jvalue:mom});

});


console.log(mom);
});

app.get('/newpath',function(req,res)
{
  res.send("hello");

});





app.listen(1234);
console.log("port no 1234");
