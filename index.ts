import { v1Workouts, v1WorkoutsParams, v1WorkoutsCount} from "./src/types/hevy-api-endpoints";
import type { v1WorkoutsResponse, v1WorkoutsCountResponse} from "./src/types/hevy-api-endpoints";
import type { Workout } from "./src/types/hevy-api-types";
import * as dotenv from 'dotenv';

// Loads .env file into process.env
dotenv.config();

let api_key = process.env.API_KEY;
if (!api_key){
    throw new Error("Failed to read API_KEY from .env.");
}

let params = new v1WorkoutsParams(api_key)
let workouts = new v1Workouts(params)

var page = await(workouts.NextPage())
while(page){
    console.log((page?.workouts)?.length)
    page = await (workouts.NextPage())

    // console.log(page?.workouts[0])
    // break
}


// let workoutsResponse = await GetAllWorkouts();
// let workouts = workoutsResponse.workouts;
// console.log(workouts[0].exercises[0].sets);
