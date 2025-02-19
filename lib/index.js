import { setDefaultOptions } from 'date-fns';
import locales from './locales.js';

import {
	isRangeDate,
	getValidRange,
	formatSingleDate,
	formatRangeDates,
	isValidDate,
	formatDate,
	logError
} from './helpers/index.js';

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
	 * @description Formate delivery date
	 * @param {Date | Date[]} date
	 * For more information, see [formats](https://date-fns.org/v4.1.0/docs/format)
	 * @return {string | null}
	 * @memberof DateHandler
	 * @example
	 * const Dates = new DateHandler({locale: 'es'})
	 * Dates.formatDeliveryDate('2024-10-04T21:26:33.801Z') // 10/04/2024
	 * Dates.formatDeliveryDate(['2024-10-20T22:50:03.553Z', '2024-10-21T22:50:03.553Z']), // 10/20 19:50 - 10/21 19:50
	 */
	formatDelivery(dates) {
		try {
			if (isRangeDate(dates))
				return formatRangeDates(getValidRange(dates), {
					locale: this.locale
				});

			const dateToFormat = Array.isArray(dates) ? dates[0] : dates;

			if (!this.isValid(dateToFormat)) throw new Error('Argument must be a valid Date');

			return formatSingleDate(dateToFormat, { locale: this.locale });
		} catch (reason) {
			logError(reason.message);
			return null;
		}
	}

	/**
	 * The `format` function takes a date, format string, and options, validates the date, and then formats
	 * the date using the specified format and options, logging any errors and returning null if the date
	 * is invalid.
	 * @param {Date} date - The `date` parameter is the date that you want to format. It should be a valid Date
	 * object.
	 * @param {string} format - The `format` parameter in the `format` function is used to specify the format in
	 * which the date should be displayed. It could be a string containing a combination of date and time
	 * format tokens, such as 'YYYY-MM-DD HH:mm:ss'. This format string defines how the date should be
	 * formatted
	 * * For more information, see [formats](https://date-fns.org/v4.1.0/docs/format)
	 * @param options - Options is an object that can contain additional configuration settings for
	 * formatting the date. These settings can include things like specifying the time zone, customizing
	 * the output format, or providing any other specific requirements for formatting the date.
	 * * locale inherits it from the instance of class
	 * * For more information, see [options](https://date-fns.org/v4.1.0/docs/format#types/FormatOptions/630)
	 * @memberof DateHandler
	 * @returns The `format` function will return the result of the `formatSingleDate` function called with
	 * the provided `date`, `format`, and `options`. If the `date` argument is not a valid Date, an error
	 * message will be logged using `logError` and `null` will be returned.
	 * @example
	 * const Dates = new DateHandler({locale: 'es'})
	 * Dates.format('2024-10-04T21:26:33.801Z', '') // 10/04/2024
	 */
	format(date, format, options) {
		try {
			if (!this.isValid(date)) throw new Error('Argument must be a valid Date');

			return formatDate(date, format, { ...options, locale: this.locale });
		} catch (reason) {
			logError(reason.message);
			return null;
		}
	}
}

export default DateHandler;
