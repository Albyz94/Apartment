import express from "express";
import bodyParser from "body-parser"


const app = express();


// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine" , "ejs");

//SERVER
app.listen("3000", (req , res)=> {
    console.log("server listening on port 3000");
});

app.get("/" , (req , res)=> {
    res.render("headerMenu");
});