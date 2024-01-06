const express = require("express")
const app= express();
const portNo = 5678
//app.use(portNo,())

app.get("/", (req, res) => {
    return res.status(200).json({
        MESSAGE: "Welcome to Vercel Site"
    })
})

app.listen(portNo, () => {
    console.log("server is started on port no 5678")
})