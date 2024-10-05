import DateHandler from '../lib/index.js';
import sinon from 'sinon';
import { strict as assert } from 'assert';

describe('format method', () => {
	let mockDate;
	const mockNow = new Date(2024, 9, 1, 0, 0);
	beforeEach(() => {
		mockDate = sinon.useFakeTimers(mockNow.getTime());
	});

	afterEach(() => {
		mockDate.restore();
	});

	it('expect to throw error and return null', () => {
		const Dates = new DateHandler();
		assert.equal(Dates.format(mockNow, 7), null);
	});

	it('expect default format DD/MM/YYYY', () => {
		const Dates = new DateHandler();
		assert.equal(Dates.format(mockNow), '10/01/2024');
	});

	it('expect return format yyyy', () => {
		const Dates = new DateHandler();
		assert.equal(Dates.format('2024-10-04T21:26:33.801Z', 'yyyy'), '2024');
	});
});
