import { setDefaultOptions, format as formatDate } from 'date-fns';
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
	 * const Dates = new DateHanlder({locale: 'es'})
	 */
	constructor(config) {
		this.locale = config?.locale || 'en';
		setDefaultOptions({ locale: locales[this.locale] || locales['default'] });
	}

	/**
	 *
	 *
	 * @param {Date} date
	 * @param {string} [format=P]
	 * @param {{}} [options={}]
	 * @return {string | null}
	 * @memberof DateHandler
	 * @example
	 * const Dates = new DateHanlder({locale: 'es'})
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
}

export default DateHandler;
