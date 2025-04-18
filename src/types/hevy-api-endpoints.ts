import type { Workout } from "./hevy-api-types";
import { cachedFetch } from "../cache/cachedFetch";
export type v1WorkoutsResponse = {
    /**
        * @description as Workout[] current page number
    * @example 1
    */
    page?: number;
    /**
        * @description Total number of pages
    * @example 5
    */
    page_count?: number;
    workouts?: Workout[] 
}

export class v1WorkoutsParams{
    minPageNumber = 1;
    maxPageSize = 10;
    constructor(
        public api_key: string,
        public pageNumber: number = this.minPageNumber,
        public pageSize: number = this.maxPageSize,
    )
        {
            this.pageNumber= Math.max(pageNumber, this.minPageNumber)
            this.pageSize = Math.min(pageSize, this.maxPageSize)
        }
}

export class v1Workouts{
    private pageCount: number | null = null
    private pageRead= 0
    minPageNumber = 1;
    maxPageSize = 10;
    constructor(
        public api_key: string,
        public pageNumber: number = this.minPageNumber,
        public pageSize: number = this.maxPageSize,
    ){
            this.pageNumber= Math.max(pageNumber, this.minPageNumber)
            this.pageSize = Math.min(pageSize, this.maxPageSize)
    }

    API_URL= "https://api.hevyapp.com/v1/workouts";
    private async fetch(): Promise<v1WorkoutsResponse> {
        const response = await cachedFetch(`${this.API_URL}?page=${this.pageNumber}&pageSize=${this.pageSize}`, {
            method: "GET",
            headers: {
                "api-key": this.api_key,
                "Content-Type": "application/json",
            },
        });

        return (await response.json() as v1WorkoutsResponse)
    }

    private async HasNextPage(){
        return this.pageCount && this.pageRead< this.pageCount
    }

    UpdateToNextPage(){
        this.pageRead += 1
        this.pageNumber = Math.max(this.pageNumber + 1, this.pageCount % this.pageSize)
    }

    async NextPage(): Promise<v1WorkoutsResponse | undefined>{
        // Read initial page
        var pages
        if (!this.pageCount){
            pages = (await this.fetch())
            if (pages && pages.page_count){
                this.pageCount = pages.page_count
                this.UpdateToNextPage()
            }
        }

        // Read any subsequent pages
        if (await this.HasNextPage()){
            pages = (await this.fetch())
        }

        if (pages && pages.workouts){
            this.UpdateToNextPage()
        }

        return pages
    }
}

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

