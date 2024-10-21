import isValidDate from './isValidDate.js';
/**
 * The function `isRangeDate` checks if the input is an array with more than one element.
 * @param {Dates[]} dates - An array of dates.
 * @returns {boolean} The function `isRangeDate` returns a boolean value indicating whether the input `dates` is
 * an array with a length greater than 1.
 */
const isRangeDate = (dates) => {
	if (!Array.isArray(dates)) return false;

	return dates.filter(Boolean).filter(isValidDate).length > 1;
};

export default isRangeDate;
