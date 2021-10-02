const express= require("express");
const request=require("request");
const bodyParser=require("body-parser");

const app=express();

app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/homepage.html");
});

app.get("/about",function(req,res){
  res.sendFile(__dirname+"/aboutUs.html");
});

app.get("/bookings",function(req,res){
  res.sendFile(__dirname+"/Bookings.html");
});

app.get("/facilities",function(req,res){
  res.sendFile(__dirname+"/Facilities.html");
});

app.get("/typeRoom",function(req,res){
  res.sendFile(__dirname+"/typeRoom.html");
});

app.get("/delhi",function(req,res){
  res.sendFile(__dirname+"/delhi.html");
});



app.listen(process.env.PORT,function(){
  console.log("Server is running");
});
