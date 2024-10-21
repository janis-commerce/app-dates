import { isValid } from 'date-fns';

const isValidDate = (date) => isValid(new Date(date));

export default isValidDate;
