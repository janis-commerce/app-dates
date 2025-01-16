import isValidDate from './isValidDate.js';

const getValidRange = (dates) => dates.filter(Boolean).filter(isValidDate);

export default getValidRange;
