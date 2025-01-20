import { format as formatDateLib } from 'date-fns';
import translate from './translate.js';

/**
 * The function `format` takes a date, format string, and optional options object as arguments and
 * returns the formatted date string using a specified format.
 * @param {Date} date - The `date` parameter is the date object that you want to format. It represents the
 * date and time that you want to convert into a specific format.
 * @param {string} [format] - The `format` parameter is a string that specifies how the date should
 * be formatted. It can include placeholders like 'dd' for day, 'MM' for month, 'HH' for hours, and
 * 'mm' for minutes. The default format is 'dd/MM HH:mm'.
 * @param {} options - The `options` parameter in the `format` function is used to provide additional
 * configuration or settings for formatting the date. This parameter allows the user to customize the
 * behavior of the `format` function based on their specific requirements. It can include options
 * such as locale settings, time zone information,
 */
const format = (date, format, options) => {
	const formattedDate = formatDateLib(date, format || options?.locale?.dateFormat, options);
	return translate(formattedDate, options?.locale);
};

export default format;
