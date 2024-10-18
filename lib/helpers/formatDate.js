import { format as formatDateLib } from 'date-fns';

const formatDate = (date, format = 'dd/MM HH:mm', options) => formatDateLib(date, format, options);

export default formatDate;
