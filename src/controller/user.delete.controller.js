//**
// 
// 
//  */

import { userModelDetail } from "../model/user.model.detail.js";
import { userModel } from "../model/user.model.js";

export const userDelete = async (req,res) => {

            try {

                const {_id} = req.params

                const user = await userModel.findOne({_id});

                if(!user){

                 return  res.status(404).json({Messege: "Not found"});  

                }

                const userDelete = await userModelDetail.deleteOne({userId: user._id})
                  if(!userDelete){

                  return res.status(404).json({mesage: "Not Found"})

                  }

                res.status(200).json({message: "User Delete",userDelete});

            } catch (error) {
                
                console.log(error);
                res.status(500).json({messege: "INTERNAL SERVER ERROR"});

            }


}