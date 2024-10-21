import { isToday as isTodayDate } from 'date-fns';

/**
 * The function `isToday` checks if a given date is today's date.
 * @param {Date} date - The `date` parameter is a variable that represents a specific date.
 * @return {boolean}
 */
const isToday = (date) => isTodayDate(date);

export default isToday;
