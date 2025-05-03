import { connect } from "mongoose";
import { config } from "dotenv";

config();
const MONGODB_URL = process.env.MONGODB_URL;

export const DatabaseConfig = async () => {
      
    try {

        const connection = await connect(MONGODB_URL);
        const db = connection.connection;
        const {name,host,port} = db;

        console.log(` Database Connect = ✅\n Database Name = ${name}\n Database Host = ${host}\n Database Port = ${port}`)
        
    } catch (error) {
       
        console.error(error);
        process.exit(1);

    }



}