import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import "dotenv/config";

const app = express();
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "janessa.bednar51@ethereal.email",
    pass: "PUFDfhHmsFPAKH9ZZ5",
  },
});


// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine" , "ejs");

//SERVER
app.listen("3000", (req , res)=> {
    console.log("server listening on port 3000");
});

app.post("/sendmail", async (req , res)=> {
const message = {
    from: req.body.fromMail,
    to: "janessa.bednar51@ethereal.email",
    subject: req.body.subject,
    text: req.body.emailText
};

try {
    await transporter.sendMail(message);
} catch (err) {
    console.error("C'è un errore nell'invio: ", err);
}
res.redirect("/");
});

app.get("/" , (req , res)=> {
    res.render("home");
});

app.get("/apartments" , (req , res)=> {
    res.render("apartments");
});

app.get("/contact" , (req , res)=> {
    res.render("contacts");
});



app.get("/discover" , (req , res)=> {
    res.render("discover");
});


app.get( "*" , (req , res)=> {
    res.render("404");
});
