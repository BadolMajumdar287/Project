import {model,Schema} from "mongoose"




const  userDetailSchema = new Schema(

    {
    
        age: {
            type: Number,
            required: true,
        },

        gender: {
             type: String,
             required: true,
        },
        mobile:  {
            type: String,
            required: true,
        },
        
        userId:{
            type: Schema.Types.ObjectId,
            ref:"user",
            required: true
        }
    
       
    },

          {
            timestamps: true
          }
);


export const userDetailModel = model("details",userDetailSchema);