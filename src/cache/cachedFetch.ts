const cachedDirectory = `${__dirname}/.cached`
export async function cachedFetch(
    input: string | URL | globalThis.Request, init?: RequestInit, cacheExpMS : number = (new DateFromNowBuilder().AddMins(10)).DateMS()): Promise<Response>{

    let inputHash = Bun.hash(input as string)
    let cachedFilePath = `${cachedDirectory}/${inputHash}.json`
    let cachedFile = Bun.file(cachedFilePath)
    console.log(input)
    console.log(cachedFile.name)
    if (await cachedFile.exists()){
        let modifiedTime = (await cachedFile.stat()).mtimeMs
        if (modifiedTime < cacheExpMS){
            // Read the JSON of the response body and 
            console.log("Cache")
            return new Response(await cachedFile.json())
        }
    }
    console.log("Fetching")
    let response = await fetch(input, init)
    let responseJSON = await response.text()
    let responseToDisk = new Response(JSON.stringify(responseJSON))
    Bun.write(cachedFile, responseToDisk, {createPath: true})
        
    return new Response(responseJSON)
}



// Provide the ability to create dates relative to Date.Now
export class DateFromNowBuilder{
    private SECOND = 1000
    private MINUTE = 60 * this.SECOND
    private HOUR = 60 * this.MINUTE
    private DAY = 24 * this.HOUR
    constructor(
        private date = Date.now()
    ){}

    AddDays(d: number = 1): DateFromNowBuilder{
        this.date += d * this.DAY
        return this
    }

    AddMins(m: number = 1): DateFromNowBuilder{
        this.date += m * this.MINUTE
        return this
    }

    AddSeconds(s: number = 1): DateFromNowBuilder{
        this.date += s * this.SECOND
        return this
    }

    DateMS(): number{
        return this.date
    }
}

