const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
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
  res.header("Content-Disposition", 'attachment; filename="Video.mp4');
  ytdl(url, {itag:137}).pipe(res);
  // ytdl.getInfo(url,(err,info) => {
  //   if(err){
  //     console.log(err);
  //   }else{
  //     res.send(info);
  //   }
  // })
});

///////////////////////////////////////////  POST Routes /////////////////////////////

app.post("/",(req,res) => {
  res.send("Hey");
});

//Server Config
var PORT = process.env.PORT || 3000
app.listen(PORT,() => {
  console.log(`Server is up on port ${PORT}`);
})
