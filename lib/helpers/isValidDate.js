import { isValid } from 'date-fns';

/**
 * The function `isValidDate` checks if a given input is a valid date.
 * @param {Date} date
 * representing a date in a format that can be parsed by the `Date` constructor.
 * @return {boolean}
 */
const isValidDate = (date) => isValid(new Date(date));

export default isValidDate;
