import { cachedFetch } from "../cache/cachedFetch";
import type { v1WorkoutsResponse } from "../types/hevy-api-types";
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

    async NextPage(): Promise<v1WorkoutsResponse | null>{
        // Read initial page
        var pages = null
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
