import type { Workout } from "./hevy-api-types";
export type v1WorkoutsResponse = {
    /**
        * @description as Workout[]urrent page number
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

export class v1WorkoutsParameters  {
    minPageNumber = 1;
    maxPageSize = 10;
    constructor(
        private api_key: string,
        private page: number = 1,
        private pageSize: number = 5,
    )
        {
            this.pageSize = Math.min(pageSize, 10)
        }
}
