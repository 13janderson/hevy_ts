Extension of Hevy API (https://api.hevyapp.com/docs/) which provides a richer set of endpoints. This project serves to help me learn TypeScript and also potentially as a precursor to a CLI app built to show current gym progress.

# Generating Types according to api

1. Take json swagger file from https://api.hevyapp.com/docs/ which is just a JSON representation of the API's endpoints and the various schemas it uses.
2. Run `bunx openapi-typescript hevy_api.json -o src/types/hevy-api.d.ts`. Loosely, this "typescript"-ifies the JSON swagger file but this representation is not much use just yet.
<br> We want to extract the **schemas** from this file directly and have these as types so that we can subsequently reason about the return values of the API endpoints.
3. From the generated types file, go through and manually delete everything except **schemas**.
4. For each schema, change this to an exported type.

#### Example of step 3 and 4

All we want is for PostWorkoutsRequestSet to be a type, we must strip it out out the current nested structure and then export it as a type.
```typescript
export interface components {
    schemas: {
        PostWorkoutsRequestSet: {
            /**
             * @description The type of the set.
             * @example normal
             * @enum {string}
             */
            type?: "warmup" | "normal" | "failure" | "dropset";
            /**
             * @description The weight in kilograms.
             * @example 100
             */
            weight_kg?: number | null;
            /**
             * @description The number of repetitions.
             * @example 10
             */
             ...
```

We remove the outer JSON structure and then export this as a type.
```typescript
export type PostWorkoutsRequestSet = {
    /**
     * @description The type of the set.
     * @example normal
     * @enum {string}
     */
    type?: "warmup" | "normal" | "failure" | "dropset";
    /**
     * @description The weight in kilograms.
     * @example 100
     */
    weight_kg?: number | null;
    /**
     * @description The number of repetitions.
     * @example 10
     */
     ...
```
