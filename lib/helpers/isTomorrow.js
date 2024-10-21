import { isTomorrow as isTomorrowDate } from 'date-fns';

/**
 * The function isTomorrow takes a date as input and checks if it is tomorrow's date.
 * @param {Date} date - The `date` parameter is a variable that represents a specific date in a JavaScript
 * Date object format.
 * @return {boolean}
 */
const isTomorrow = (date) => isTomorrowDate(date);

export default isTomorrow;
