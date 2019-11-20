const express = require("express");
const faker = require("faker"); //calling faker
const app = express();


app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//finding random name 
var fakerName = faker.name.findName();  //faker variable random name

  //  res.render("fileToRender.ejs", {"variableName":value});
 
    
//routes
app.get("/", function(req, res){
    res.render("index.html", {"name":fakerName});
});

app.get("/mercury", function(req,res){
    res.render("mercury.html", {"name":fakerName});
});

app.get("/earth", function(req,res){
    res.render("earth.html", {"name":fakerName});
});

app.get("/venus", function(req,res){
    res.render("venus.html", {"name":fakerName}); 
});

app.get("/venus", function(req,res){
    res.send("This will be the venus home page!");
    
});



//server listener

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is running...");
});





