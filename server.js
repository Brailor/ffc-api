var express = require("express");
var url = require("url");
var app = express();
var moment = require("moment");


app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "application/json" });
  next();
});

app.get("/", function(request, response) {
  response.end(new Date().toDateString());
});

app.get('*', function(req, res){
  var data = url.parse(req.url, false);
  var date = data.pathname.replace(/%/g , ' ').replace('/', '');
  if(moment(date, ["MM-DD-YYYY", "YYYY-MM-DD", "DD-MM-YYYY", "YYYY.MM.DD", "MMMM-DD-YYYY"], true).isValid()){
    res.end(JSON.stringify({
      unix : Date.parse(date)/1000,
      normal : date
    }));
  }
  else if(Number(data.pathname.replace('/', '')) > 0){
    res.end(JSON.stringify({
      unix : data.pathname.replace('/', ''),
      normal: moment.unix(data.pathname.replace('/', '')).format("YYYY-MM-DD")
    }));
  }
  else{
    res.end(JSON.stringify({
      unix : null,
      normal : null
    }));
  }
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
