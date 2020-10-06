const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  fs = require('fs'),
  socket = require('socket.io'),
  ytdl = require('ytdl-core');


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

///////////////////////////////////////////  GET Routes /////////////////////////////
app.get("/",(req,res) => {
  res.render("home");
});

app.get("/download",(req,res) => {
  var url = req.query.url;
  var info = ytdl.getBasicInfo(url,(err,data) => {
    if(err){console.log(err);}
    else{
      res.header("Content-Disposition", "attachment; filename="+data.playerResponse.videoDetails.title);
      ytdl(url, {quality:"highest"}).pipe(res);
    }
  });
});

app.get("/info",(req,res) => {
  var url = req.query.url;
  var info = ytdl.getBasicInfo(url,(err,data) => {
    if(err){console.log(err);}
    else{
      res.render("home",{data:data});
    }
  });
});



//Server Config
var PORT = process.env.PORT || 3000
var server = app.listen(PORT,() => {
  console.log(`Server is up on port ${PORT}`);
})


var io = socket(server);

io.on('connection',(socket) => {
  socket.on('dataDisplay',({title:jayanth}) => {
    socket.emit('show',)
  });
});
