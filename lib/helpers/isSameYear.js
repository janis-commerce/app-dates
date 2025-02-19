import { isSameYear as sameYear } from 'date-fns';

/**
 * The function `isSameYear` checks if two dates are on the same day.
 * @param {Date} earlierDate - The `earlierDate` parameter represents the date that occurs earlier in time
 * @param {Date} laterDate - A date representing a later point in time.
 * when comparing two dates.
 * @return {boolean}
 */

export default (earlierDate, laterDate) => sameYear(laterDate, earlierDate, { in: true });
