const cachedDirectory = `${__dirname}/.cached`
export async function cachedFetch(
    input: string | URL | globalThis.Request, init?: RequestInit, cacheExpiryMS: number = new DateBuilder().AddDays(1).Milliseconds()): Promise<Response>{

    let inputHash = Bun.hash(input as string)
    let cachedFilePath = `${cachedDirectory}/${inputHash}.json`
    let cachedFile = Bun.file(cachedFilePath)
    if (await cachedFile.exists()){
        let expiryTimeMS = new DateBuilder(cachedFile.lastModified).AddMilliSeconds(cacheExpiryMS).Milliseconds()

        if (Date.now() <= expiryTimeMS){
            // Read the JSON of the response body and 
            return new Response(await cachedFile.json())
        }
    }

    let response = await fetch(input, init)
    let responseJSON = await response.text()
    let responseToDisk = new Response(JSON.stringify(responseJSON))
    Bun.write(cachedFile, responseToDisk, {createPath: true})
        
    return new Response(responseJSON)
}

// Provide the ability to create dates relative to a starting date
export class DateBuilder{
    private static SECOND = 1000
    private static MINUTE = 60 * this.SECOND
    private static HOUR = 60 * this.MINUTE
    private static DAY = 24 * this.HOUR

    constructor(
        private dateMs: number = 0
    ){
    }

    AddDays(d: number = 1): DateBuilder{
        this.dateMs += d * DateBuilder.DAY
        return this
    }

    AddMins(m: number = 1): DateBuilder{
        this.dateMs += m * DateBuilder.MINUTE
        return this
    }

    AddSeconds(s: number = 1): DateBuilder{
        this.dateMs += s * DateBuilder.SECOND
        return this
    }

    AddMilliSeconds(ms: number = 1): DateBuilder{
        this.dateMs += ms
        return this
    }

    private Unit(conversion: number){
        return this.dateMs / conversion
    }

    Seconds(): number{
        return this.Unit(DateBuilder.SECOND)
    }

    Hours(): number{
        return this.Unit(DateBuilder.HOUR)
    }

    Days(): number{
        return this.Unit(DateBuilder.DAY)
    }

    Milliseconds(): number{
        return this.Unit(1)
    }
}

