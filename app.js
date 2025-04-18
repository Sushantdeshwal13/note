const express = require("express");
const app = express();

const userModel = require('./usermodel');

app.get("/", (req, res)=>{
    res.send("hello");
});

app.get("/create", async(req, res)=>{
    const userdata = await userModel.create({
        name:"sushant",
        username:"deshwal",
        email:"sush@gmail.com"
    })
    res.send(userdata);
})
app.get("/update", async(req, res)=>{
      let updatedata = await userModel.findOneAndUpdate(
        {name:"sushant"}, {name:"deshwal"}, {new:true}
      )
    
    res.send(updatedata);
})
app.get("/read", async (req, res)=>{
    let readuser = await userModel.find({username:"deshwal"});
    res.send(readuser);
})
app.get("/delete", async (req,res)=>{
    let deleteuser = await userModel.findOneAndDelete({username:"deshwal"});
    res.send(deleteuser);
})
app.listen(3000);