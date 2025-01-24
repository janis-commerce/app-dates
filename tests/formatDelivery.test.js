/* eslint-disable no-undef */
import DateHandler from '../lib/index.js';
import { useFakeTimers } from 'sinon';
import { strict as assert } from 'assert';

const mockNow = new Date(2024, 9, 18, 0, 0);

let clock;
//"2024-10-18T22:50:03.553Z"
describe('formatDelivery method', () => {
	before(() => {
		clock = useFakeTimers(mockNow);
	});

	after(() => {
		clock.restore();
	});

	describe('With single date', () => {
		it('expect to return null when date is invalid', () => {
			const Dates = new DateHandler();
			assert.equal(Dates.formatDelivery([]), null);
		});

		describe('with lang es', () => {
			const Dates = new DateHandler({ locale: 'es' });
			it('expect to return formatted date with string or one string inside array', () => {
				assert.equal(Dates.formatDelivery(['2024-10-15T22:50:03.553Z']), 'Hasta 15 oct, 19:50 hs');
			});

			it('expect to return relative date when is today or tomorrow', () => {
				assert.equal(Dates.formatDelivery('2024-10-18T22:50:03.553Z'), 'Hasta hoy, 19:50 hs');
				assert.equal(Dates.formatDelivery('2024-10-19T22:50:03.553Z'), 'Hasta mañana, 19:50 hs');
			});
		});

		describe('with lang en', () => {
			const Dates = new DateHandler({ locale: 'en' });
			it('expect to return formatted date with string or one string inside array', () => {
				assert.equal(Dates.formatDelivery(['2024-10-15T22:50:03.553Z']), 'Until Oct 15, 19:50');
			});

			it('expect to return relative date when is today or tomorrow', () => {
				assert.equal(Dates.formatDelivery('2024-10-18T22:50:03.553Z'), 'Until today, 19:50');
				assert.equal(Dates.formatDelivery('2024-10-19T22:50:03.553Z'), 'Until tomorrow, 19:50');
			});
		});

		describe('with lang pt', () => {
			const Dates = new DateHandler({ locale: 'pt' });
			it('expect to return formatted date with string or one string inside array', () => {
				assert.equal(Dates.formatDelivery(['2024-10-15T22:50:03.553Z']), 'Até 15 out, 19:50 hs');
			});

			it('expect to return relative date when is today or tomorrow', () => {
				assert.equal(Dates.formatDelivery('2024-10-18T22:50:03.553Z'), 'Até hoje, 19:50 hs');
				assert.equal(Dates.formatDelivery('2024-10-19T22:50:03.553Z'), 'Até amanhã, 19:50 hs');
			});
		});
	});

	describe('With range dates', () => {
		it('expect to return null when dates are invalid', () => {
			const Dates = new DateHandler();
			assert.equal(Dates.formatDelivery([{}, NaN]), null);
		});

		describe('with lang es', () => {
			const Dates = new DateHandler({ locale: 'es' });

			it('expect to return relative date when the two dates are equals', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-18T22:50:03.553Z', '2024-10-18T22:50:03.553Z']),
					'Hasta hoy, 19:50 hs'
				);

				assert.equal(
					Dates.formatDelivery(['2024-10-19T22:50:03.553Z', '2024-10-19T22:50:03.553Z']),
					'Hasta mañana, 19:50 hs'
				);
			});

			it('expect to return range date when is relative date and range time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-18T20:50:03.553Z', '2024-10-18T22:50:03.553Z']),
					'Hoy, 17:50 - 19:50 hs'
				);

				assert.equal(
					Dates.formatDelivery(['2024-10-19T20:50:03.553Z', '2024-10-19T22:50:03.553Z']),
					'Mañana, 17:50 - 19:50 hs'
				);
			});

			it('expect to return range date when is not relative date and single time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2024-10-21T22:50:03.553Z']),
					'20 oct, 19:50 - 21 oct, 19:50 hs'
				);
			});

			it('expect to return range date when is not relative but same date with range time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2024-10-20T23:50:03.553Z']),
					'20 oct, 19:50 - 20:50 hs'
				);
			});

			it('expect to return range date when is not relative date with range time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2024-10-21T23:50:03.553Z']),
					'20 oct, 19:50 - 21 oct, 20:50 hs'
				);
			});

			it('expect to return range date with year when dates are from different year', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2025-10-21T23:50:03.553Z']),
					'20 oct 2024, 19:50 - 21 oct 2025, 20:50 hs'
				);
			});

			it('expect to return range date with not undefined value and take first two value ', () => {
				assert.equal(
					Dates.formatDelivery([
						'2024-10-20T22:50:03.553Z',
						undefined,
						'2024-10-21T23:50:03.553Z',
						[],
						'2024-10-21T23:50:03.553Z'
					]),
					'20 oct, 19:50 - 21 oct, 20:50 hs'
				);
			});
		});

		describe('with lang en', () => {
			const Dates = new DateHandler({ locale: 'en' });

			it('expect to return relative date when the two dates are equals', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-18T22:50:03.553Z', '2024-10-18T22:50:03.553Z']),
					'Until today, 19:50'
				);

				assert.equal(
					Dates.formatDelivery(['2024-10-19T22:50:03.553Z', '2024-10-19T22:50:03.553Z']),
					'Until tomorrow, 19:50'
				);
			});

			it('expect to return range date when is relative date and range time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-18T20:50:03.553Z', '2024-10-18T22:50:03.553Z']),
					'Today, 17:50 - 19:50'
				);

				assert.equal(
					Dates.formatDelivery(['2024-10-19T20:50:03.553Z', '2024-10-19T22:50:03.553Z']),
					'Tomorrow, 17:50 - 19:50'
				);
			});

			it('expect to return range date when is not relative date and single time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2024-10-21T22:50:03.553Z']),
					'Oct 20, 19:50 - Oct 21, 19:50'
				);
			});

			it('expect to return range date when is not relative but same date with range time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2024-10-20T23:50:03.553Z']),
					'Oct 20, 19:50 - 20:50'
				);
			});

			it('expect to return range date when is not relative date with range time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2024-10-21T23:50:03.553Z']),
					'Oct 20, 19:50 - Oct 21, 20:50'
				);
			});

			it('expect to return range date with year when dates are from different year', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2025-10-21T23:50:03.553Z']),
					'Oct 20 2024, 19:50 - Oct 21 2025, 20:50'
				);
			});

			it('expect to return range date with not undefined value and take first two value ', () => {
				assert.equal(
					Dates.formatDelivery([
						'2024-10-20T22:50:03.553Z',
						undefined,
						'2024-10-21T23:50:03.553Z',
						[],
						'2024-10-21T23:50:03.553Z'
					]),
					'Oct 20, 19:50 - Oct 21, 20:50'
				);
			});
		});

		describe('with lang pt', () => {
			const Dates = new DateHandler({ locale: 'pt' });

			it('expect to return relative date when the two dates are equals', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-18T22:50:03.553Z', '2024-10-18T22:50:03.553Z']),
					'Até hoje, 19:50 hs'
				);

				assert.equal(
					Dates.formatDelivery(['2024-10-19T22:50:03.553Z', '2024-10-19T22:50:03.553Z']),
					'Até amanhã, 19:50 hs'
				);
			});

			it('expect to return range date when is relative date and range time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-18T20:50:03.553Z', '2024-10-18T22:50:03.553Z']),
					'Hoje, 17:50 - 19:50 hs'
				);

				assert.equal(
					Dates.formatDelivery(['2024-10-19T20:50:03.553Z', '2024-10-19T22:50:03.553Z']),
					'Amanhã, 17:50 - 19:50 hs'
				);
			});

			it('expect to return range date when is not relative date and single time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2024-10-21T22:50:03.553Z']),
					'20 out, 19:50 - 21 out, 19:50 hs'
				);
			});

			it('expect to return range date when is not relative but same date with range time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2024-10-20T23:50:03.553Z']),
					'20 out, 19:50 - 20:50 hs'
				);
			});

			it('expect to return range date when is not relative date with range time', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2024-10-21T23:50:03.553Z']),
					'20 out, 19:50 - 21 out, 20:50 hs'
				);
			});

			it('expect to return range date with year when dates are from different year', () => {
				assert.equal(
					Dates.formatDelivery(['2024-10-20T22:50:03.553Z', '2025-10-21T23:50:03.553Z']),
					'20 out 2024, 19:50 - 21 out 2025, 20:50 hs'
				);
			});

			it('expect to return range date with not undefined value and take first two value ', () => {
				assert.equal(
					Dates.formatDelivery([
						'2024-10-20T22:50:03.553Z',
						undefined,
						'2024-10-21T23:50:03.553Z',
						[],
						'2024-10-21T23:50:03.553Z'
					]),
					'20 out, 19:50 - 21 out, 20:50 hs'
				);
			});
		});
	});
});
