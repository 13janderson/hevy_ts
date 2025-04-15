import { v1Workouts, v1WorkoutsParams} from "./src/types/hevy-api-endpoints";
import type { v1WorkoutsResponse } from "./src/types/hevy-api-endpoints";
import type { Workout } from "./src/types/hevy-api-types";
import * as dotenv from 'dotenv';

// Loads .env file into process.env
dotenv.config();
async function GetWorkouts(): Promise<v1WorkoutsResponse | null> {
    let v1 = new v1Workouts();
    let api_key = process.env.API_KEY;
    if (!api_key){
        console.error("Failed to read API_KEY from .env.");
        return null;
    }
    let params = new v1WorkoutsParams(api_key);
    return v1.fetch(params);
}
    

