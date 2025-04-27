import { cachedFetch } from "../cache/cachedFetch";
import type { Workout } from "../types/workout";
import type { Set} from "../types/set";

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

export function v1WorkoutsResponseFlatten(response: v1WorkoutsResponse): Set[]{
  let workouts = response.workouts
  if (!workouts){
    return []
  }

  let sets: Set[] = []
  for (let i = 0; i < workouts.length; i++){
    let workout = workouts[i]
    if(!workout){
      continue
    }
    let exercises = workout.exercises
    if (!exercises){
      continue
    }
    for (let j = 0; j < exercises.length; j++){
      let exercise = exercises[j]
      if (!exercise){
        continue
      }
      let exerciseSets = exercise.sets
      if (!exerciseSets){
        continue
      }
      for (let k =0; k < exerciseSets.length; k++){
        let set = exerciseSets[k]
        if (!set){
          continue
        }
        sets[sets.length] = set
      }
    }
  }
  return sets
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

  // Paginates all workouts on the endpoint and exports locally to JSON
  async exportJSON(exportPath: string){
    var page = await(this.NextPage())
    let allSets: Set[] = []
    while(page){
      let pageSets = v1WorkoutsResponseFlatten(page)
      allSets.push(...pageSets)
      page = await (this.NextPage())
    }

    Bun.write(exportPath, JSON.stringify(allSets, null, "\t"),  {createPath: true})
  }
}

