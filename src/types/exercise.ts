import type { Set } from "./set";
export type Exercise = {
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
  sets?: Set[];
}
