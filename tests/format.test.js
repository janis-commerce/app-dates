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

	describe('With invalid date', () => {
		it('expect to return null when date is invalid', () => {
			const Dates = new DateHandler();
			assert.equal(Dates.format([]), null);
			assert.equal(Dates.format([{}, NaN]), null);
		});
	});
	describe('with valid date', () => {
		const Dates = new DateHandler({ locale: 'es' });
		it('expect to return formatted date with string or one string inside array', () => {
			assert.equal(
				Dates.format('2024-10-15T22:50:03.553Z', 'dd MMM yyyy, HH:mm'),
				'15 oct 2024, 19:50'
			);
			assert.equal(Dates.format('2024-10-15T22:50:03.553Z', 'dd MMM, HH:mm'), '15 oct, 19:50');
		});
	});
});
