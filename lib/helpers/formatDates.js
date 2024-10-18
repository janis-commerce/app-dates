import isSameDay from './isSameDay.js';
import sameDayRangeDate from './sameDayRangeDate.js';
import formatDate from './formatDate.js';

const formatDates = (dates = [], format, options) => {
	const [firstDate, secondDate] = dates;

	if (isSameDay(firstDate, secondDate)) return sameDayRangeDate(firstDate, secondDate);

	return [firstDate, secondDate].map((date) => formatDate(date, format, options)).join(' - ');
};

export default formatDates;
