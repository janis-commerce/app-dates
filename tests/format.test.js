import DateHandler from '../lib/index.js';
import { useFakeTimers } from 'sinon';
import { strict as assert } from 'assert';

let mockDate;

//"2024-10-18T22:50:03.553Z"
describe('format method', () => {
	afterEach(() => {
		if (mockDate) mockDate.restore();
	});

	describe('With single date', () => {
		it('expect to return null when date is invalid', () => {
			const Dates = new DateHandler();
			assert.equal(Dates.format([]), null);
		});

		it('expect to return formatted date with string or one string inside array', () => {
			const Dates = new DateHandler({ locale: 'es' });
			assert.equal(Dates.format(['2024-10-15T22:50:03.553Z']), '15/10 19:50');
			assert.equal(Dates.format('2024-10-14T22:50:03.553Z'), '14/10 19:50');
		});

		it('expect to return formatted Date in english format', () => {
			const Dates = new DateHandler({ locale: 'en' });
			assert.equal(Dates.format('2024-10-14T22:50:03.553Z'), '10/14 19:50');
		});

		it('expect to return relative date when is today', () => {
			const Dates = new DateHandler({ locale: 'en' });

			const mockNow = new Date(2024, 9, 18, 0, 0);

			mockDate = useFakeTimers(mockNow.getTime());

			assert.equal(Dates.format('2024-10-18T22:50:03.553Z'), 'Today at 7:50 PM');
		});
	});

	describe('Witch range dates', () => {
		it('expect to return null when dates are invalid', () => {
			const Dates = new DateHandler();
			assert.equal(Dates.format([{}, NaN]), null);
		});

		it('expect to return relative date when is today with one data time with same time', () => {
			const mockNow = new Date(2024, 9, 18, 0, 0);

			mockDate = useFakeTimers(mockNow.getTime());

			const Dates = new DateHandler();
			assert.equal(
				Dates.format(['2024-10-18T22:50:03.553Z', '2024-10-18T22:50:03.553Z']),
				'Today at 19:50'
			);
		});

		it('expect to return relative date when is tomorrow with one data time with same time', () => {
			const mockNow = new Date(2024, 9, 18, 0, 0);

			mockDate = useFakeTimers(mockNow.getTime());

			const Dates = new DateHandler();
			assert.equal(
				Dates.format(['2024-10-19T22:50:03.553Z', '2024-10-19T22:50:03.553Z']),
				'Tomorrow at 19:50'
			);
		});

		it('expect to return range date when is not relative date and single time', () => {
			const mockNow = new Date(2024, 9, 18, 0, 0);

			mockDate = useFakeTimers(mockNow.getTime());

			const Dates = new DateHandler();
			assert.equal(
				Dates.format(['2024-10-20T22:50:03.553Z', '2024-10-21T22:50:03.553Z']),
				'10/20 19:50 - 10/21 19:50'
			);
		});

		it('expect to return range date when is not relative date and range time', () => {
			const mockNow = new Date(2024, 9, 18, 0, 0);

			mockDate = useFakeTimers(mockNow.getTime());

			const Dates = new DateHandler();
			assert.equal(
				Dates.format(['2024-10-18T20:50:03.553Z', '2024-10-18T22:50:03.553Z']),
				'Today from 17:50 to 19:50'
			);
		});

		it('expect to return range date when is not relative date with range time', () => {
			const mockNow = new Date(2024, 9, 18, 0, 0);

			mockDate = useFakeTimers(mockNow.getTime());

			const Dates = new DateHandler();
			assert.equal(
				Dates.format(['2024-10-20T22:50:03.553Z', '2024-10-21T23:50:03.553Z']),
				'10/20 19:50 - 10/21 20:50'
			);
		});
	});
});
