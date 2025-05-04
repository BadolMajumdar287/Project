import { userDetailModel } from "../model/user.detail.model.js";


export const userDetailCreate = async (req,res) => {

     try {
        
        const {age,gender,mobile,userId} = req.body;

        const userDetail = await userDetailModel.create({age,gender,mobile,userId});
         
        if(userDetail){

            res.status(200).json({message: "Create UsreDetail",userDetail});
       
        }else{

           res.status(404).json({message: "NOT FOUND"});

        }


     } catch (error) {

        console.log(error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
        
     }


}