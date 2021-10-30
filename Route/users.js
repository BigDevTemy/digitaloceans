import express from 'express'
import userModel from "../models/users.js";
const Router = express.Router();

Router.get('/',(req,res)=>{
    res.send('Welcome To Digital Oceans');
});

Router.get('/users',(req,res)=>{
    res.send('Welcome To Users');
});

Router.post('/addUsers',async(req,res)=>{
   
    const user = new userModel(req.body);
    try {
        await user.save();
        res.send(user._id);
        
      } catch (error) {
        res.status(500).send(error);
      }
})

Router.get('/getAllUsers',async(req,res)=>{
   
    userModel.find((err,data)=>{
        if(err){
            res.send({'Error':err})
        }
        else{
            res.send(data)
        }
    })
})

Router.get('/user/:userId',async(req,res)=>{
    userModel.findById(req.params.userId,(err,data)=>{
        if(err){
            res.send({'msg':err})
        }
        else{
            res.send({'msg':data})
        }
    })
})

Router.get('/update/user/:userId',async(req,res)=>{
    userModel.findByIdAndUpdate(req.params.userId,{$push:{"roleAndPermission":{'role_name':'SuperAdmin','role_permission':'All Priveldge'}}},{safe: true, upsert: true},(err,data)=>{
        if(err){
            res.send({'msg':err})
        }
        else{
            res.send({'msg':data})
        }
    })
})
export default Router;