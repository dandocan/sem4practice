//we need to use express
//routing system, server
var express = require("express");
var app = express();

//use the file system - No need to npm install
var fs = require("fs");

//point to the root
app.get( "/" , function( req , res ){
	//THE WRONG APPROACH is without a function call back
	//open the index.html
	var sIndexHtml = fs.readFileSync("views/index.html", "utf8");  //syntax suggestion: "s" in front is String
	//console.log(sIndexHtml);
	var sNickname="Dani";
	var sLNickname="Vilcu";
	sIndexHtml=sIndexHtml.replace("{{nickname}}", sNickname);
	sIndexHtml=sIndexHtml.replace("{{nicklastname}}",sLNickname);
	res.send(sIndexHtml);
} );

//creat a channel - when you hear function you think APIs
app.get("/create-game", function(req, res){
	res.send("Game created successfully");
});

//server
app.listen(5555,function(){
	console.log("SERVER IS SPYING YO PORT 5555");
});