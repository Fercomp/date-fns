import { toDate } from "../toDate/index.js";
import type { LocalizedOptions, WeekOptions, Day } from "../types.js";
import { getDefaultOptions } from "../_lib/defaultOptions/index.js";

/**
 * The {@link lastDayOfWeek} function options.
 */
export interface WeekendDaysOptions
  extends LocalizedOptions<"options">,
    WeekOptions {}

/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */

export function isWeekend<DateType extends Date>(
  date: DateType | number | string,
  options?: WeekendDaysOptions,
): boolean {
  const day = toDate(date).getDay();
  const defaultOptions = getDefaultOptions();
  const weekendDays =
    options?.weekendDays ??
    options?.locale?.options?.weekendDays ??
    defaultOptions.weekendDays ??
    defaultOptions.locale?.options?.weekendDays ??
    [0,6];

    const aux:number[] = weekendDays;
  
  return aux.includes(day);
}
