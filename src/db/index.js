import mongoose, { connection } from "mongoose";
import { DB_NAME } from "../constants";


const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGOGB_URL}/${DB_NAME}`)
        console.log(`\n MongDB connected.. DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGODB connection errer ", error);
        process.exit(1)
    }
}

export default connectDB