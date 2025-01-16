import isValidDate from './isValidDate.js';

/**
 * The function `getValidRange` filters out invalid dates from an array of dates.
 * @param dates - An array of date values.
 */
const getValidRange = (dates) => dates.filter(Boolean).filter(isValidDate);

export default getValidRange;
