import isToday from './isToday.js';
import formatDate from './formatDate.js';
import isTomorrow from './isTomorrow.js';
import translate from './translate.js';

/**
 * The function `sameDayRangeDate` formats a date range within the same day into a human-readable
 * string.
 * @param startDate - startDate is the starting date and time of an event.
 * @param endDate - I see that you have a function `sameDayRangeDate` that takes a `startDate` and an
 * `endDate` as parameters. Could you please provide me with the value of the `endDate` parameter so
 * that I can assist you further with the function?
 * @returns The function `sameDayRangeDate` returns a string that represents the range of dates and
 * times between the `startDate` and `endDate`. The string includes information about the day (either
 * 'today', 'tomorrow', or a formatted date), the start time, and the end time. If the start and end
 * times are the same, it only includes the day and the start time.
 */
const sameDayRangeDate = (startDate, endDate, options) => {
	let day = '';
	const { locale } = options;

	if (isToday(startDate)) day = 'today';
	if (isTomorrow(startDate)) day = 'tomorrow';
	if (!isToday(startDate) && !isTomorrow(startDate))
		day = formatDate(startDate, locale.dayFormat, { locale });

	const startHours = formatDate(startDate, locale.customFormat.hourFormat, { locale });
	const endHours = formatDate(endDate, locale.customFormat.hourFormat, { locale });

	if (startHours === endHours) return translate(`Until ${day}, ${endHours} hours`, locale);

	return translate(`${day}, ${startHours} - ${endHours} hours`, locale);
};

export default sameDayRangeDate;
