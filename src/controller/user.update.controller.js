/**
 * 
 * 
 */
import { userModel } from "../model/user.model.js"
import { userModelDetail } from "../model/user.model.detail.js";



export const userUpdate = async (req,res) => {

        try {
              
            const {_id} = req.params;
            const updateData = req.body;


            const user = await userModel.findOne({ _id });
                 
            if (!user) {
            return res.status(404).json({ message: "USER NOT FOUND" });
             };


             const  userDetail = await userModelDetail.updateOne(
                {userId: user._id},
                { $set: updateData },
                { new: true } 
             )

               if(!userDetail){
                return res.status(404).json({message: "Userdetail Not found"})
               }
              res.status(200).json({message: "User Updated",userDetail})

            
        } catch (error) {

            console.log(error);
            res.status(500).json({message: "INTERNAL SERVER ERROR"});

        }


} ;