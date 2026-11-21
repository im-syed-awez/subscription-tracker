import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if(!DB_URI){
    throw new Error("Please define MONGODB_URI env variable in .env.<development/production>.local");
};

export const dbConnection = async() => {
    try {
        
    } catch (error) {
        
    }
}