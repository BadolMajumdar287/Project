/**
 * 
 * 
 * 
 */


import { userModel } from "../model/user.model.js";
import { userDetailModel } from "../model/user.detail.model.js";


export const userCreate = async (req,res) => {

  try {

      const {name,email,password} = req.body;
      const user = await userModel.create({name,email,password});
        
     
      if(user ){
        res.status(200).json({message: "User Create",user});
      }else{
        res.status(404).json({message: "NOT FOUND"});
      }

    
  } catch (error) {
    
    console.log(error);
    res.status(500).json({message: "INTERNAL SEVER ERROR"});

  }



};



export const userGetById = async (req,res) => {


  try {

         const {name} = req.params

       const  user = await userModel.findOne({name});

       const userDetail = await userDetailModel.findOne({userId:user._id})

    res.status(200).json({user,userDetail})
    
  } catch (error) {
    
    console.log(error);
    res.status(500).json({message: "INTERNAL SERVER ERROR"});

  }



}
