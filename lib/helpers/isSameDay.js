import { isSameDay as sameDay } from 'date-fns';

/**
 * The function `isSameDay` checks if two dates are on the same day.
 * @param {Date} earlierDate - The `earlierDate` parameter represents the date that occurs earlier in time
 * @param {Date} laterDate - A date representing a later point in time.
 * when comparing two dates.
 * @return {boolean}
 */
export default (earlierDate, laterDate) => sameDay(laterDate, earlierDate, { in: true });
