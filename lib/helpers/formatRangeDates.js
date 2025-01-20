import isSameDay from './isSameDay.js';
import sameDayRangeDate from './sameDayRangeDate.js';
import formatDate from './formatDate.js';
import isSameYear from './isSameYear.js';

/**
 * The `formatDates` function takes an array of dates, a format string, and options, and returns a
 * formatted date range string.
 * @param [dates] - The `dates` parameter is an array containing two date objects. The function
 * `formatDates` takes these two dates and formats them based on the specified format and options. If
 * the two dates are the same day, it returns a formatted string for the same day. Otherwise, it
 * formats the two dates
 * in which the dates should be displayed. It allows you to customize how the dates are formatted when
 * they are displayed together. You can provide a custom format string or use a predefined format from
 * the options object.
 * @param options - The `options` parameter is an object that may contain the following properties:
 * @returns The `formatDates` function returns a formatted date range string based on the input dates,
 * format, and options provided. If the input dates are the same day, it returns a formatted string for
 * the same day range date. Otherwise, it formats the two dates individually and joins them with a dash
 * (' - ') to represent a date range. The formatting is determined by the `format` parameter if
 * provided
 */
const formatRangeDates = (dates = [], options) => {
	const [firstDate, secondDate] = dates;

	if (isSameDay(firstDate, secondDate)) return sameDayRangeDate(firstDate, secondDate, options);

	const formatFromLocale = isSameYear(firstDate, secondDate)
		? options?.locale?.dateFormat
		: options?.locale?.dateFormatYear;

	return [firstDate, secondDate]
		.map((date) => formatDate(date, formatFromLocale, options))
		.join(' - ');
};

export default formatRangeDates;
