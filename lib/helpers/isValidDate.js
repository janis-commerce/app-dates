import { isValid, parseISO } from 'date-fns';

const isValidDate = (date) => isValid(date) || isValid(parseISO(date));

export default isValidDate;
