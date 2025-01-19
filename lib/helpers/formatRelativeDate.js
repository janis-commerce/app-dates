import { formatRelative as formatRelativeDate } from 'date-fns';
import translate from './translate.js';

/**
 * The function `formateRelativeDate` is used to format a given date as a relative date compared to the
 * current date.
 * @param {Date} date - The `date` parameter is the date you want to format relative to the current date.
 */
const formateRelativeDate = (date, options) => {
	const dateFormatted = formatRelativeDate(date, new Date());
	return translate(dateFormatted, options.locale);
};

export default formateRelativeDate;
