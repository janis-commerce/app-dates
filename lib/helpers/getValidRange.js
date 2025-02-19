import isValidDate from './isValidDate.js';

/**
 * The function `getValidRange` filters out invalid dates from an array of dates.
 * @param {Dates[]} dates - An array of date values.
 * @return {Dates[] | []}
 */
export default (dates) => dates.filter(Boolean).filter(isValidDate);
