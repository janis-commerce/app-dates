import { setDefaultOptions } from 'date-fns';
import locales from './locales.js';
import translate from './helpers/translate.js';
import isRangeDate from './helpers/isRangeDate.js';
import formateRelativeDate from './helpers/formatRelativeDate.js';
import isToday from './helpers/isToday.js';
import isTomorrow from './helpers/isTomorrow.js';
import formatDate from './helpers/formatDate.js';
import formatDates from './helpers/formatDates.js';
import isValidDate from './helpers/isValidDate.js';
import logError from './helpers/logError.js';

/**
 *
 *
 * @class
 */
class DateHandler {
	/**
	 * Creates an instance of DateHandler.
	 * @param {Object} config
	 * @param {"en" | "es" | "pt-BR" | "pt"} [config.locale=en] - config.locale
	 * @example
	 * const Dates = new DateHandler({locale: 'es'})
	 */
	constructor(config) {
		this.locale = locales[config?.locale || 'en'];
		setDefaultOptions({ locale: this.locale });
	}

	/**
	 *
	 * @description Return true or false if date is Valid
	 * @param {Date} date
	 * @return {boolean}
	 * @memberof DateHandler
	 * @example
	 * const Dates = new DateHandler({locale: 'es'})
	 * Dates.isValid('2024-10-04T21:26:33.801Z') // true
	 * Dates.isValid('Janis commerce') // false
	 */
	isValid(date) {
		return isValidDate(date);
	}

	/**
	 *
	 * @description Formate Date
	 * @param {Date | Date[]} date
	 * @param {string} [format=P]
	 * For more information, see [formats](https://date-fns.org/v4.1.0/docs/format)
	 * @param {Object} [options={}]
	 * For more information, see [options](https://date-fns.org/v4.1.0/docs/format#types/FormatOptions/630)
	 * @return {string | null}
	 * @memberof DateHandler
	 * @example
	 * const Dates = new DateHandler({locale: 'es'})
	 * Dates.format('2024-10-04T21:26:33.801Z') // 10/04/2024
	 */
	format(date, format, options = {}) {
		try {
			if (isRangeDate(date))
				return translate(formatDates(date, this.locale.dateFormat, options), this.locale);

			let dateToParse = Array.isArray(date) ? date[0] : date;

			if (!this.isValid(dateToParse)) throw new Error('Argument must be a valid Date');

			if (isToday(dateToParse) || isTomorrow(dateToParse))
				return translate(formateRelativeDate(dateToParse), this.locale);

			return translate(
				formatDate(dateToParse, this.locale.dateFormat, { locale: this.locale }),
				this.locale
			);
		} catch (reason) {
			logError(reason.message);
			return null;
		}
	}
}

export default DateHandler;
