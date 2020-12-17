const express = require("express");
const path =require("path");
const hbs = require("hbs");
const app= express();



require("./db/conn");
const Register=require("./models/registers");


const port =process.env.PORT || 3000;



const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
// const partials_path = path.join(__dirname,"../templates/partials");
// console.log(path.join(__dirname,"../templates/partials"));


app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",templates_path);
// hbs.registerPartial(partials_path);




// app.get("",(req,res)=>{
//     res.render("index");
// });

//to login user

app.get("/index",(req,res)=>{
    res.render("index");
});
app.post("index",async(req,res)=>{
    try{
        const username=req.body.username;
        const password=req.body.password;

        // console.log(`${username} and password is ${password}`);

      const uservalue=await Register.findOne({username:username});
        if(uservalue.password === password){
            res.status(201).render("index");

        }else{
            res.send("username and password are not matching");
        }
    }catch(error){
        res.status(400).send("invalid username or password");
    }
})
// app.get("/index",(req,res)=>{
//     res.render("index");
// });


//to register new candidate
app.get("/register",(req,res)=>{
    res.render("register");
});
app.post("/register",async(req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.cpassword;

        if(password === cpassword ){
            const registerEmployee=new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username : req.body.username,
                password : req.body.password,
                cpassword : req.body.cpassword,
                email :req.body.email,
                phone :req.body.phone,
            })

            const registered = await registerEmployee.save();
            res.status(201).render("index");

        }else{
            res.send("Password are not matching");
        }
    }catch(error){
        res.status(400).send(error);
    }
});
app.get("/index1.hbs",(req,res)=>{
    res.render("index1");
});

app.listen(port,()=>{
    console.log(`server is running at post number ${port}`);
});