import DateHandler from '../lib/index.js';
import sinon from 'sinon';
import { strict as assert } from 'assert';

describe('isValid method', () => {
	it('expect false when date is invalid', () => {
		const Dates = new DateHandler();
		assert.equal(Dates.isValid('Janis commerce'), false);
		assert.equal(Dates.isValid([]), false);
		assert.equal(Dates.isValid(NaN), false);
	});

	it('expect true when date is valid', () => {
		const Dates = new DateHandler();
		assert.equal(Dates.isValid(new Date()), true);
		assert.equal(Dates.isValid(2323123), true);
		assert.equal(Dates.isValid(new Date('2024-09-07T03:00:00.000Z')), true);
	});
});
