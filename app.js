const express = require("express");
const app = express();
app.use(express.static("public"));


app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html")
});


app.post("/",(req,res) => {

});





app.listen("3000",(req,res) => {
    console.log("server is up and ruuning")
});

