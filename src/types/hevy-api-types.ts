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
    reps?: number | null;
    /**
     * @description The distance in meters.
     * @example null
     */
    distance_meters?: number | null;
    /**
     * @description The duration in seconds.
     * @example null
     */
    duration_seconds?: number | null;
    /**
     * @description A custom metric for the set. Currently used for steps and floors.
     * @example null
     */
    custom_metric?: number | null;
    /**
     * @description The Rating of Perceived Exertion (RPE).
     * @example null
     * @enum {number|null}
     */
    rpe?: 6 | 7 | 7.5 | 8 | 8.5 | 9 | 9.5 | 10 | null;
};
export type PostWorkoutsRequestExercise = {
    /**
     * @description The ID of the exercise template.
     * @example D04AC939
     */
    exercise_template_id?: string;
    /**
     * @description The ID of the superset.
     * @example null
     */
    superset_id?: number | null;
    /**
     * @description Additional notes for the exercise.
     * @example Felt good today. Form was on point.
     */
    notes?: string | null;
    sets?: components["schemas"]["PostWorkoutsRequestSet"][];
};
export type PostWorkoutsRequestBody =  {
    workout?: {
        /**
         * @description The title of the workout.
         * @example Friday Leg Day 🔥
         */
        title?: string;
        /**
         * @description A description for the workout workout.
         * @example Medium intensity leg day focusing on quads.
         */
        description?: string | null;
        /**
         * @description The time the workout started.
         * @example 2024-08-14T12:00:00Z
         */
        start_time?: string;
        /**
         * @description The time the workout ended.
         * @example 2024-08-14T12:30:00Z
         */
        end_time?: string;
        /**
         * @description A boolean indicating if the workout is private.
         * @example false
         */
        is_private?: boolean;
        exercises?: components["schemas"]["PostWorkoutsRequestExercise"][];
    };
};
export type PostRoutinesRequestSet = {
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
    reps?: number | null;
    /**
     * @description The distance in meters.
     * @example null
     */
    distance_meters?: number | null;
    /**
     * @description The duration in seconds.
     * @example null
     */
    duration_seconds?: number | null;
    /**
     * @description A custom metric for the set. Currently used for steps and floors.
     * @example null
     */
    custom_metric?: number | null;
};
export type PostRoutinesRequestExercise = {
    /**
     * @description The ID of the exercise template.
     * @example D04AC939
     */
    exercise_template_id?: string;
    /**
     * @description The ID of the superset.
     * @example null
     */
    superset_id?: number | null;
    /**
     * @description The rest time in seconds.
     * @example 90
     */
    rest_seconds?: number | null;
    /**
     * @description Additional notes for the exercise.
     * @example Stay slow and controlled.
     */
    notes?: string | null;
    sets?: components["schemas"]["PostRoutinesRequestSet"][];
};
PostRoutinesRequestBody: {
                             routine?: {
                                 /**
                                  * @description The title of the routine.
                                  * @example April Leg Day 🔥
                                  */
    title?: string;
    /**
     * @description The folder id the routine should be added to. Pass null to insert the routine into default "My Routines" folder
     * @example null
     */
    folder_id?: number | null;
    /**
     * @description Additional notes for the routine.
     * @example Focus on form over weight. Remember to stretch.
     */
    notes?: string;
    exercises?: components["schemas"]["PostRoutinesRequestExercise"][];
                             };
                         };
export type PutRoutinesRequestSet = {
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
    reps?: number | null;
    /**
     * @description The distance in meters.
     * @example null
     */
    distance_meters?: number | null;
    /**
     * @description The duration in seconds.
     * @example null
     */
    duration_seconds?: number | null;
    /**
     * @description A custom metric for the set. Currently used for steps and floors.
     * @example null
     */
    custom_metric?: number | null;
};
export type PutRoutinesRequestExercise = {
    /**
     * @description The ID of the exercise template.
     * @example D04AC939
     */
    exercise_template_id?: string;
    /**
     * @description The ID of the superset.
     * @example null
     */
    superset_id?: number | null;
    /**
     * @description The rest time in seconds.
     * @example 90
     */
    rest_seconds?: number | null;
    /**
     * @description Additional notes for the exercise.
     * @example Stay slow and controlled.
     */
    notes?: string | null;
    sets?: components["schemas"]["PutRoutinesRequestSet"][];
};
export type PutRoutinesRequestBody = {
    routine?: {
        /**
         * @description The title of the routine.
         * @example April Leg Day 🔥
         */
        title?: string;
        /**
         * @description Additional notes for the routine.
         * @example Focus on form over weight. Remember to stretch.
         */
        notes?: string | null;
        exercises?: components["schemas"]["PutRoutinesRequestExercise"][];
    };
};
export type PostRoutineFolderRequestBody = {
    routine_folder?: {
        /**
         * @description The title of the routine folder.
         * @example Push Pull 🏋️‍♂️
         */
        title?: string;
    };
};
export type ExerciseTemplate = {
    /**
     * @description The exercise template ID.
     * @example b459cba5-cd6d-463c-abd6-54f8eafcadcb
     */
    id?: string;
    /**
     * @description The exercise title.
     * @example Bench Press (Barbell)
     */
    title?: string;
    /**
     * @description The exercise type.
     * @example weight_reps
     */
    type?: string;
    /**
     * @description The primary muscle group of the exercise.
     * @example weight_reps
     */
    primary_muscle_group?: string;
    /** @description The secondary muscle groups of the exercise. */
    secondary_muscle_groups?: string[];
    /**
     * @description A boolean indicating whether the exercise is a custom exercise.
     * @example false
     */
    is_custom?: boolean;
};
export type RoutineFolder = {
    /**
     * @description The routine folder ID.
     * @example 42
     */
    id?: number;
    /**
     * @description The routine folder index. Describes the order of the folder in the list.
     * @example 1
     */
    index?: number;
    /**
     * @description The routine folder title.
     * @example Push Pull 🏋️‍♂️
     */
    title?: string;
    /**
     * @description ISO 8601 timestamp of when the folder was last updated.
     * @example 2021-09-14T12:00:00Z
     */
    updated_at?: string;
    /**
     * @description ISO 8601 timestamp of when the folder was created.
     * @example 2021-09-14T12:00:00Z
     */
    created_at?: string;
};
export type Routine = {
    /**
     * @description The routine ID.
     * @example b459cba5-cd6d-463c-abd6-54f8eafcadcb
     */
    id?: string;
    /**
     * @description The routine title.
     * @example Upper Body 💪
     */
    title?: string;
    /**
     * @description The routine folder ID.
     * @example 42
     */
    folder_id?: number | null;
    /**
     * @description ISO 8601 timestamp of when the routine was last updated.
     * @example 2021-09-14T12:00:00Z
     */
    updated_at?: string;
    /**
     * @description ISO 8601 timestamp of when the routine was created.
     * @example 2021-09-14T12:00:00Z
     */
    created_at?: string;
    exercises?: {
        /**
         * @description Index indicating the order of the exercise in the routine.
         * @example 0
         */
        index?: number;
        /**
         * @description Title of the exercise
         * @example Bench Press (Barbell)
         */
        title?: string;
        /**
         * @description Routine notes on the exercise
         * @example Focus on form. Go down to 90 degrees.
         */
        notes?: string;
        /**
         * @description The id of the exercise template. This can be used to fetch the exercise template.
         * @example 05293BCA
         */
        exercise_template_id?: string;
        /**
         * @description The id of the superset that the exercise belongs to. A value of null indicates the exercise is not part of a superset.
         * @example 0
         */
        supersets_id?: number | null;
        sets?: {
            /**
             * @description Index indicating the order of the set in the routine.
             * @example 0
             */
            index?: number;
            /**
             * @description The type of set. This can be one of 'normal', 'warmup', 'dropset', 'failure'
             * @example normal
             */
            type?: string;
            /**
             * @description Weight lifted in kilograms.
             * @example 100
             */
            weight_kg?: number | null;
            /**
             * @description Number of reps logged for the set
             * @example 10
             */
            reps?: number | null;
            /**
             * @description Number of meters logged for the set
             * @example null
             */
            distance_meters?: number | null;
            /**
             * @description Number of seconds logged for the set
             * @example null
             */
            duration_seconds?: number | null;
            /**
             * @description RPE (Relative perceived exertion) value logged for the set
             * @example 9.5
             */
            rpe?: number | null;
            /**
             * @description Custom metric logged for the set (Currently only used to log floors or steps for stair machine exercises)
             * @example 50
             */
            custom_metric?: number | null;
        }[];
    }[];
};
export type Workout = {
    /**
     * @description The workout ID.
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
    exercises?: {
        /**
         * @description Index indicating the order of the exercise in the workout.
         * @example 0
         */
        index?: number;
        /**
         * @description Title of the exercise
         * @example Bench Press (Barbell)
         */
        title?: string;
        /**
         * @description Notes on the exercise
         * @example Paid closer attention to form today. Felt great!
         */
        notes?: string;
        /**
         * @description The id of the exercise template. This can be used to fetch the exercise template.
         * @example 05293BCA
         */
        exercise_template_id?: string;
        /**
         * @description The id of the superset that the exercise belongs to. A value of null indicates the exercise is not part of a superset.
         * @example 0
         */
        supersets_id?: number | null;
        sets?: {
            /**
             * @description Index indicating the order of the set in the workout.
             * @example 0
             */
            index?: number;
            /**
             * @description The type of set. This can be one of 'normal', 'warmup', 'dropset', 'failure'
             * @example normal
             */
            type?: string;
            /**
             * @description Weight lifted in kilograms.
             * @example 100
             */
            weight_kg?: number | null;
            /**
             * @description Number of reps logged for the set
             * @example 10
             */
            reps?: number | null;
            /**
             * @description Number of meters logged for the set
             * @example null
             */
            distance_meters?: number | null;
            /**
             * @description Number of seconds logged for the set
             * @example null
             */
            duration_seconds?: number | null;
            /**
             * @description RPE (Relative perceived exertion) value logged for the set
             * @example 9.5
             */
            rpe?: number | null;
            /**
             * @description Custom metric logged for the set (Currently only used to log floors or steps for stair machine exercises)
             * @example 50
             */
            custom_metric?: number | null;
        }[];
    }[];
};
export type UpdatedWorkout = {
    /**
     * @description Indicates the type of the event (updated)
     * @example updated
     */
type: string;
workout: components["schemas"]["Workout"];
};
export type DeletedWorkout = {
    /**
     * @description Indicates the type of the event (deleted)
     * @example deleted
     */
type: string;
      /**
       * @description The unique identifier of the deleted workout
       * @example efe6801c-4aee-4959-bcdd-fca3f272821b
       */
id: string;
    /**
     * @description A date string indicating when the workout was deleted
     * @example 2021-09-13T12:00:00Z
     */
    deleted_at?: string;
};

export type PaginatedWorkoutEvents = {
    /**
     * @description The current page number
     * @example 1
     */
page: number;
      /**
       * @description The total number of pages available
       * @example 5
       */
page_count: number;
            /** @description An array of workout events (either updated or deleted) */
            events: (components["schemas"]["UpdatedWorkout"] | components["schemas"]["DeletedWorkout"])[]

};

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

