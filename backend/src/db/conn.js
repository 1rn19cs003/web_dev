const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/firsttype",{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(() => {
    console.log("connection succesfull!!!\nDocument inserted successfully...!!!!!!!!");
}).catch((err) =>{
    console.log(err)
});