import isToday from './isToday.js';
import formatDate from './formatDate.js';
import isTomorrow from './isTomorrow.js';

const sameDayRangeDate = (startDate, endDate) => {
	let day = '';

	if (isToday(startDate)) day = 'today';
	if (isTomorrow(startDate)) day = 'tomorrow';
	if (!isToday(startDate) && !isTomorrow(startDate)) day = formatDate(startDate, 'dd/MM');

	const startHours = formatDate(startDate, 'HH:mm');
	const endHours = formatDate(endDate, 'HH:mm');

	if (startHours === endHours) return `${day} at ${startHours}`;

	return `${day} from ${startHours} to ${endHours}`;
};

export default sameDayRangeDate;
