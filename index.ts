import { v1Workouts, v1WorkoutsResponseFlatten} from "./src/endpoints/workouts";
import * as dotenv from 'dotenv';

// Loads .env file into process.env
dotenv.config();

let api_key = process.env.API_KEY;
if (!api_key){
    throw new Error("Failed to read API_KEY from .env.");
}

let v1WorkoutsEndpoint = new v1Workouts(api_key)
var page = await(v1WorkoutsEndpoint.NextPage())

while(page){
  page = await (v1WorkoutsEndpoint.NextPage())
}


