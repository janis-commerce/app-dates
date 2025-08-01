/* eslint-disable no-undef */
import DateHandler from '../lib/index.js';
import { useFakeTimers } from 'sinon';
import { strict as assert } from 'assert';
import { locales } from '../lib/locales.js';

const mockNow = new Date(2024, 9, 18, 0, 0);

let clock;
//"2024-10-18T22:50:03.553Z"
describe('setLanguage method', () => {
	before(() => {
		clock = useFakeTimers(mockNow);
	});

	after(() => {
		clock.restore();
	});

	describe('Change language', () => {
		it('expect to change to es', () => {
			const Dates = new DateHandler({ locale: 'en' });
			Dates.setLanguage('pt');
			assert.equal(Dates.locale, locales.pt);
		});

		it('expect to change to default locale if new locale don exist', () => {
			const Dates = new DateHandler({ locale: 'en' });
			Dates.setLanguage('br');
			assert.equal(Dates.locale, locales.en);
		});
	});
});
