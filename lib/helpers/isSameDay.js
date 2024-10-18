import { isSameDay as sameDay } from 'date-fns';

/**
 * The function `isSameDay` checks if two dates are on the same day.
 * @param laterDate - A date representing a later point in time.
 * @param earlierDate - The `earlierDate` parameter represents the date that occurs earlier in time
 * when comparing two dates.
 */
const isSameDay = (earlierDate, laterDate) => sameDay(laterDate, earlierDate, { in: true });

export default isSameDay;
