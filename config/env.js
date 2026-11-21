import { config } from "dotenv";

// config the .env with its path
// config({ path:".env" });

//when we have multiple env's for different environment.
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });


// destructruing and accessing env-varibles from process.env 
export const { PORT, NODE_ENV, DB_URI } = process.env;