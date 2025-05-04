import { model,Schema } from "mongoose";


const userSchemaDatail = new Schema(
    {
     
        age: {
           type: String,
           required: true,
         },

         gender: {
            type: String,
            required: true,
         },
         mobile: {
            type: String,
            required: true,
         },
          city:  {
            type: String,
            required: true,
          },
          state: {
            type: String,
            required: true
          },
           country: {
              type: String,
              required: true
           },
            
           userId: {
            type: Schema.Types.ObjectId,
            ref: "user", 
            required: true,
           }
        




    },
    {
        timestamps: true,
    }
);



export const userModelDetail = model("detail",userSchemaDatail);
