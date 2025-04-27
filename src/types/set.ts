export type Set = {
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
}
