const path = require('path');
const mongoose =require("mongoose");
const express = require("express")
const app = express();
const portNo = 5678


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); 
app.use(express.static("public"));
app.get("/", (req, res) => {
    return res.render("home");
})

mongoose.connect("mongodb+srv://dbUser:dbUserPassword@atlascluster.w6sb48g.mongodb.net/Players").then(()=>{
    console.log("Connected to mongoDb Atlas");
    app.listen(portNo,()=>{
        console.log(`Server is started on port no ${portNo}`)
    })
}).catch((err)=>{
    console.log(err);
})