import { setDefaultOptions, format as formatDate, isValid as isValidDate } from 'date-fns';
import locales from './locales.js';

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
		this.locale = config?.locale || 'en';
		setDefaultOptions({ locale: locales[this.locale] || locales['default'] });
	}

	/**
	 *
	 * @description Formate Date
	 * @param {Date} date
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
	format(date, format = 'P', options = {}) {
		try {
			return formatDate(date, format, options);
		} catch (reason) {
			console.warn(reason.message);
			return null;
		}
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
}

export default DateHandler;
