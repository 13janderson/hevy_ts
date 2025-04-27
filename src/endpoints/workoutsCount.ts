export type v1WorkoutsCountResponse = {
    workout_count : number,
}

export class v1WorkoutsCount{
    API_URL= "https://api.hevyapp.com/v1/workouts/count";
    async fetch(api_key: string): Promise<v1WorkoutsCountResponse>{
        const response = await fetch(`${this.API_URL}`, {
            method: "GET",
            headers: {
                "api-key": api_key,
                "Content-Type": "application/json",
            },
        });

        return (await response.json() as v1WorkoutsCountResponse)
    }
}
