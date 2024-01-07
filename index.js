const path = require('path');
const express = require("express")
const app = express();
const portNo = 5678


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); 
app.use(express.static("public"));
app.get("/", (req, res) => {
    return res.render("home");
})
