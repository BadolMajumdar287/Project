/**
 * 
 * 
 * 
 */


import { userModel } from "../model/user.model.js";



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



