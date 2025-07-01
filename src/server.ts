import { Server } from 'http';
import { app } from './app';
import mongoose from 'mongoose';
require('dotenv').config()

let server: Server;
const PORT = 6000;

async function main() {
    try{
        const uri = process.env.URI;
        if (!uri) {
            throw new Error("MONGODB URI is not defined in environment variables.");
        }
        await mongoose.connect(uri);
        console.log("Connected to Mongodb Using Mongoose");
        
        //Listening Port
        server = app.listen(PORT, () => {
        console.log(`Library Management app listening on port ${PORT}`)
    });
    }catch(error){
        console.log(error)
    }

}

main()

