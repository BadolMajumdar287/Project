/**
 * 
 * 
 */
import { userModel } from "../model/user.model.js";
import { userModelDetail } from "../model/user.model.detail.js";


export const userGetById = async (req,res) => {

   try {
   
    const {name} = req.params;

    const  user = await userModel.findOne({name});
    
    if(!user){
        
      return  res.status(404).json({messsage: "USER NOT FOUND"});

    };
  
    const userDetail = await userModelDetail.findOne({userId: user._id});
    
    if(userDetail){
    
      return  res.status(200).json({message: "USER DETAIL",user,userDetail});

    }
   
    
   } catch (error) {
    
    console.log(error);
    res.status(500).json({messsage: "INTERNAL SERVER ERROR"});

   }


};