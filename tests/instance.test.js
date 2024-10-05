import DateHandler from '../lib/index.js';
import sinon from 'sinon';
import { strict as assert } from 'assert';

describe('Instance DateHandler', () => {
	it('expect locale en when args are empty ', () => {
		const Dates = new DateHandler(3);
		assert.equal(Dates.locale, 'en');
	});

	it('expect locale en when is not define ', () => {
		const Dates = new DateHandler({});
		assert.equal(Dates.locale, 'en');
	});

	it('expect locale es when is define ', () => {
		const Dates = new DateHandler({ locale: 'es' });
		assert.equal(Dates.locale, 'es');
	});
});
