const express = require("express");
const moment = require("moment");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const formats = [
    
    'MMMM D, YYYY',
    'MMMM D YYYY',
    'MMM D, YYYY',
    'MMM D YYYY',
    'D MMMM YYYY',
    'D MMM YYYY',
    'D YYYY MMMM',
    'D YYYY MMM',
    'YYYY MM DD',
    'YYYY MMMM DD',
    'YYYY MMMM D'
  ];


app.get("/", function(req, res) {
  res.render('index');
});

app.get('/:time', function(req, res){
  
  var date = req.params;
  
  if(moment(date.time, formats, true).isValid()){
    res.end(JSON.stringify({
      unix : moment(date.time).valueOf(),
      natural : moment(date.time).format("YYYY MMMM, DD")
    }));
  }
  else if(isNumeric(date.time)){
    res.end(JSON.stringify({
      unix : date.time,
      natural: moment.unix(date.time).format("YYYY MMMM, DD")
    }));
  }
  else{
    res.end(JSON.stringify({
      unix : null,
      natural : null
    }));
  }

});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});
