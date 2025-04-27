import { v1Workouts, v1WorkoutsResponseFlatten} from "./src/endpoints/workouts";
import * as dotenv from 'dotenv';
import { v1WorkoutsCount } from "./src/endpoints/workoutsCount";

// Loads .env file into process.env
dotenv.config();

let api_key = process.env.API_KEY;
if (!api_key){
    throw new Error("Failed to read API_KEY from .env.");
}

let v1WorkoutsEndpoint = new v1Workouts(api_key)
v1WorkoutsEndpoint.exportJSON("export.json")
// var page = await(v1WorkoutsEndpoint.NextPage())
//
// while(page){
//   page = await (v0WorkoutsEndpoint.NextPage())
// }


