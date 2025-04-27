import type { Exercise } from "./exercise";
export type Workout = {
    /**
     * @dercription The workout ID.
     * @example b459cba5-cd6d-463c-abd6-54f8eafcadcb
     */
    id?: string;
    /**
     * @description The workout title.
     * @example Morning Workout 💪
     */
    title?: string;
    /**
     * @description The workout description.
     * @example Pushed myself to the limit today!
     */
    description?: string;
    /**
     * @description ISO 8601 timestamp of when the workout was recorded to have started.
     * @example 2021-09-14T12:00:00Z
     */
    start_time?: number;
    /**
     * @description ISO 8601 timestamp of when the workout was recorded to have ended.
     * @example 2021-09-14T12:00:00Z
     */
    end_time?: number;
    /**
     * @description ISO 8601 timestamp of when the workout was last updated.
     * @example 2021-09-14T12:00:00Z
     */
    updated_at?: string;
    /**
     * @description ISO 8601 timestamp of when the workout was created.
     * @example 2021-09-14T12:00:00Z
     */
    created_at?: string;
    exercises?: Exercise[];
};
