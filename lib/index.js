import { setDefaultOptions } from 'date-fns';
import locales from './locales.js';
import translate from './helpers/translate.js';
import isRangeDate from './helpers/isRangeDate.js';
import getValidRange from './helpers/getValidRange.js';
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
	 * const Dates = new DateHandler() // default locale 'en'
	 */
	constructor(config) {
		this.locale = locales[config?.locale] || locales.en;
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
	 * @description Set language if need to be change
	 * @param {string} lang
	 * @return {void}
	 * @memberof DateHandler
	 * @example
	 * const Dates = new DateHandler({locale: 'es'})
	 * Dates.setLanguage('en')
	 */
	setLanguage(lang = '') {
		this.locale = locales[String(lang)] || locales.en;
		setDefaultOptions({ locale: this.locale });
	}
	/**
	 *
	 * @description Formate Date
	 * @param {Date | Date[]} date
	 * @param {string} format - format of Date
	 * For more information, see [formats](https://date-fns.org/v4.1.0/docs/format)
	 * @return {string | null}
	 * @memberof DateHandler
	 * @example
	 * const Dates = new DateHandler({locale: 'es'})
	 * Dates.format('2024-10-04T21:26:33.801Z') // 10/04/2024
	 * Dates.format(['2024-10-20T22:50:03.553Z', 2024-10-21T22:50:03.553Z']), // '10/20 19:50 - 10/21 19:50
	 */
	format(date, format) {
		try {
			if (isRangeDate(date))
				return translate(
					formatDates(getValidRange(date), format, {
						locale: this.locale
					}),
					this.locale
				);

			const dateToParse = Array.isArray(date) ? date[0] : date;

			if (!this.isValid(dateToParse)) throw new Error('Argument must be a valid Date');

			if (isToday(dateToParse) || isTomorrow(dateToParse))
				return translate(formateRelativeDate(dateToParse), this.locale);

			return translate(formatDate(dateToParse, format, { locale: this.locale }), this.locale);
		} catch (reason) {
			logError(reason.message);
			return null;
		}
	}
}

export default DateHandler;
