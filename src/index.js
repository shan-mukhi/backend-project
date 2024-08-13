 import dotenv from "dotenv"
 dotenv.config()
 import  express from "express";
 import { connectDB } from "./db/db.js";
 const app = express();
;(async () => {
    try {
        // Connect to the database
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`App listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to the database or starting the server:", error);
        process.exit(1); // Exit the process with a failure code-learn more abt these codes
    }
})();

 

/* FIRST APPROACH
//database connection
//directly write and call a function
//or use IIFE ()() immeadiately invoked function expression - a semicolon is used before IIFE just to avoid any interruption
;( async ()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`DB CONNECTED!! DB HOST: ${connectionInstance}`);
        app.on("error",(error)=>{
            console.log("ERRRR: app unable to communicate to database");
            throw error;
         })
         app.listen(process.env.PORT,()=>
        {
            console.log(`app listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error);
        throw error;
    }

})() */