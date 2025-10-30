const express = require('express')
const app=express()
const port =3000
const path = require("path")
app.use(express.static(path.join(__dirname, "public")))

app.set("views",path.join(__dirname,"/views"))
app.set("view engine","ejs")

app.listen(port,()=>{
    console.log("listening on port numebr this")
})

app.get("/",(req,res)=>{
    // res.send("<h1> hello my this is root</h1>")
    res.render("home.ejs")
})
// app.set()
app.get("/rolldice",(req,res)=>{
    let rand =  Math.floor(Math.random()*6) +1 
   
    res.render("rolldice.ejs",{value:rand})
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata= require("./data.json")
    const data=instadata[username]  
    console.log(data)
    if(data){

        res.render("insta.ejs",{data })
    }
    else{
        res.render("error.ejs")
    }
})