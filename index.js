const express = require("express");
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening to http://localhost:${PORT}`)
}

function handleHome(req,res){
    console.log(req);
    res.send("hello fom home");
}
function handleProfile(req,res){
    res.send("You are on my profile");
}

app.get("/",handleHome);
app.get("/profile",handleProfile)

app.listen(PORT,handleListening);