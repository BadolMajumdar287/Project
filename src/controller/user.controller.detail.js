//**
// 
// 
// 
// 
//  */

import { userModelDetail } from "../model/user.model.detail.js"

export const userCreateDetail = async (req,res) => {
       
          try {
           
            const {age,gender,mobile,city,state,country,userId} = req.body;
                 
            const userDetail = await userModelDetail.create({age,gender,mobile,city,state,country,userId});
    
               if(userDetail){
                res.status(200).json({message: "UserDetail Create",userDetail});
               }else{
                res.status(404).json({message:"NOT FOUND"});
               }



            
          } catch (error) {


            console.log(error);
            res.status(500).json({message: "INTERNAL SERVER ERROR"});

            
          }

}