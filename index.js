import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening to http://localhost:${PORT}`);

const handleHome = (req,res) => res.send("hello fom home");

const handleProfile=(req,res)=>res.send("You are on my profile");

const betweenHome = (req,res,next )=>{
    console.log("I'm between!");
    next();
}

app.get("/",handleHome);

app.use(betweenHome);

app.get("/profile",handleProfile);

app.listen(PORT,handleListening);