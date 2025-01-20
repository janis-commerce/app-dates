import formatDate from './formatDate.js';
import isToday from './isToday.js';
import isTomorrow from './isTomorrow.js';
import formateRelativeDate from './formatRelativeDate.js';

/**
 * The `formatSingleDate` function formats a single date using a specified format or a default format
 * based on locale settings.
 * @param date - The `date` parameter is the date that you want to format.
 * @param format - The `format` parameter is a string that specifies the format in which the date
 * should be displayed. It can include placeholders for different parts of the date, such as year,
 * month, day, etc. For example, "MM/DD/YYYY" or "DD MMMM YYYY". If no format is
 * @param options - The `options` parameter likely contains additional settings or configurations that
 * can be passed to the `formatSingleDate` function. These settings could include things like the
 * locale to use for formatting the date, any specific date format to apply, or other customization
 * options.
 * @returns The `formatSingleDate` function is returning the result of calling the `formatDate`
 * function with the `date`, `formatToUse`, and `options` as arguments.
 */
const formatSingleDate = (date, format, options) => {
	if (isToday(date) || isTomorrow(date)) return formateRelativeDate(date, { locale: this.locale });

	const formatToUse = format || `'Until' ${options.locale.dateFormat}`;
	return formatDate(date, formatToUse, options);
};

export default formatSingleDate;
