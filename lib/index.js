import {
	setDefaultOptions,
	format as formatDate,
	isValid as isValidDate,
	isSameDay as sameDay,
	formatRelative as formatRelativeDate,
	isToday,
	isTomorrow,
	parseISO
} from 'date-fns';
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

	_formatDates(dates = [], format, options) {
		try {
			if (!Array.isArray(dates)) throw new Error('dates must be array');
			const [firstDate, secondDate] = dates;

			return [firstDate, secondDate]
				.filter(Boolean)
				.filter(this.isValid)
				.map((date) => formatDate(date, format, options))
				.join(' - ');
		} catch (error) {
			console.warn(error.message);
			return null;
		}
	}

	_isSameDay(laterDate, earlierDate) {
		return sameDay(laterDate, earlierDate, { in: true });
	}

	_formatRelative(date) {
		try {
			if (!this.isValid(date)) throw new Error('Dat must be a valid Date');
			return formatRelativeDate(date, new Date());
		} catch (error) {
			console.warn(error.message);
			return null;
		}
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
	format(date, format = 'dd/MM HH:mm', options = {}) {
		try {
			if (Array.isArray(date)) return this._formatDates(date, format, options);
			if (!this.isValid(date)) throw new Error('Dat must be a valid Date');

			if (isToday(date) || isTomorrow(date)) return this._formatRelative(date);

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
		return isValidDate(date) || isValidDate(parseISO(date));
	}
}

const dates = new DateHandler();

console.log('dates.formatDate(new Date()) :>> ', dates.format('2024-10-11T21:26:33.801Z'));

export default DateHandler;
