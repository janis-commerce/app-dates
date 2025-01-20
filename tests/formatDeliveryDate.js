/* eslint-disable no-undef */
import DateHandler from '../lib/index.js';
import { useFakeTimers } from 'sinon';
import { strict as assert } from 'assert';

const mockNow = new Date(2024, 9, 18, 0, 0);

let clock;
//"2024-10-18T22:50:03.553Z"
describe('format method', () => {
	before(() => {
		clock = useFakeTimers(mockNow);
	});

	after(() => {
		clock.restore();
	});

	describe('With single date', () => {
		it('expect to return null when date is invalid', () => {
			const Dates = new DateHandler();
			assert.equal(Dates.format([]), null);
		});

		it('expect to return formatted date with string or one string inside array', () => {
			const Dates = new DateHandler({ locale: 'es' });
			assert.equal(
				Dates.formatDeliveryDate(['2024-10-15T22:50:03.553Z']),
				'Hasta 15 oct, 19:50 hs'
			);
			assert.equal(Dates.formatDeliveryDate('2024-10-14T22:50:03.553Z'), 'Hasta 14 oct, 19:50 hs');
		});

		it('expect to return formatted Date in Spanish format', () => {
			const Dates = new DateHandler({ locale: 'en' });
			Dates.setLanguage('es');
			assert.equal(Dates.formatDeliveryDate('2024-10-14T22:50:03.553Z'), 'Hasta 14 oct, 19:50 hs');
		});

		it('expect to return relative date when is today', () => {
			const Dates = new DateHandler({ locale: 'en' });

			assert.equal(Dates.formatDeliveryDate('2024-10-18T22:50:03.553Z'), 'Until today, 19:50 hs');
		});
	});

	describe('With range dates', () => {
		it('expect to return null when dates are invalid', () => {
			const Dates = new DateHandler();
			assert.equal(Dates.formatDeliveryDate([{}, NaN]), null);
		});

		it('expect to return relative date when is today with one data time with same time', () => {
			const Dates = new DateHandler();
			assert.equal(
				Dates.formatDeliveryDate(['2024-10-18T22:50:03.553Z', '2024-10-18T22:50:03.553Z']),
				'Until today, 19:50'
			);
		});

		it('expect to return relative date when is tomorrow with one data time with same time', () => {
			const Dates = new DateHandler();
			assert.equal(
				Dates.formatDeliveryDate(['2024-10-19T22:50:03.553Z', '2024-10-19T22:50:03.553Z']),
				'Until Tomorrow, 19:50 hs'
			);
		});

		it('expect to return date with one data time with same time', () => {
			const Dates = new DateHandler();
			assert.equal(
				Dates.formatDeliveryDate(['2024-10-24T22:50:03.553Z', '2024-10-24T22:50:03.553Z']),
				'Until Tomorrow, 19:50 hs'
			);
		});

		it('expect to return range date when is relative date and range time', () => {
			const Dates = new DateHandler();
			assert.equal(
				Dates.formatDeliveryDate(['2024-10-18T20:50:03.553Z', '2024-10-18T22:50:03.553Z']),
				'Today, 17:50 - 19:50 hs'
			);
		});

		it('expect to return range date when is not relative date and single time', () => {
			const Dates = new DateHandler();
			assert.equal(
				Dates.formatDeliveryDate(['2024-10-20T22:50:03.553Z', '2024-10-21T22:50:03.553Z']),
				'Oct 20 19:50 - Oct 21 19:50'
			);
		});

		it('expect to return range date when is not relative but same date with range time', () => {
			const Dates = new DateHandler();
			assert.equal(
				Dates.formatDeliveryDate(['2024-10-20T22:50:03.553Z', '2024-10-20T23:50:03.553Z']),
				'Oct 20, 19:50 - 20:50 hs'
			);

			Dates.setLanguage('es');
			assert.equal(
				Dates.formatDeliveryDate(['2024-10-20T22:50:03.553Z', '2024-10-20T23:50:03.553Z']),
				'20 oct, 19:50 - 20:50 hs'
			);
		});

		it('expect to return range date when is not relative date with range time', () => {
			const Dates = new DateHandler();
			assert.equal(
				Dates.formatDeliveryDate(['2024-10-20T22:50:03.553Z', '2024-10-21T23:50:03.553Z']),
				'Oct 20, 19:50 - Oct 21, 20:50'
			);
		});

		it('expect to return range date with year when dates are from different year', () => {
			const Dates = new DateHandler();
			assert.equal(
				Dates.formatDeliveryDate(['2024-10-20T22:50:03.553Z', '2025-10-21T23:50:03.553Z']),
				'Oct 20 2024, 19:50 - Oct 21 2025, 20:50'
			);
		});

		it('expect to return range date with not undefined value and take first two value ', () => {
			const Dates = new DateHandler();
			assert.equal(
				Dates.formatDeliveryDate([
					'2024-10-20T22:50:03.553Z',
					undefined,
					'2024-10-21T23:50:03.553Z',
					[],
					'2024-10-21T23:50:03.553Z'
				]),
				'Oct 20, 19:50 - oct 21, 20:50 hs'
			);
		});
	});
});
