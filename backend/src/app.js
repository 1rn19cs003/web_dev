const express = require("express");
const path =require("path");
const hbs = require("hbs");
const app= express();
require("./db/conn");


const port =process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
// const partials_path = path.join(__dirname,"../templates/partials");
// console.log(path.join(__dirname,"../templates/partials"));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",templates_path);
// hbs.registerPartial(partials_path);


// app.get("",(req,res)=>{
//     res.render("index");
// });
app.get("/index",(req,res)=>{
    res.render("index");
});
// app.get("/index",(req,res)=>{
//     res.render("index");
// });
app.get("/register",(req,res)=>{
    res.render("register");
});
app.get("/index1.hbs",(req,res)=>{
    res.render("index1");
});

app.listen(port,()=>{
    console.log(`server is running at post number ${port}`);
});