import { formatRelative as formatRelativeDate } from 'date-fns';

/**
 * The function `formateRelativeDate` is used to format a given date as a relative date compared to the
 * current date.
 * @param {Date} date - The `date` parameter is the date you want to format relative to the current date.
 */
const formateRelativeDate = (date) => formatRelativeDate(date, new Date());

export default formateRelativeDate;
