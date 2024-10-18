import { formatRelative as formatRelativeDate } from 'date-fns';

const formateRelativeDate = (date) => formatRelativeDate(date, new Date());

export default formateRelativeDate;
