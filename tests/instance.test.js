import DateHandler from '../lib/index.js';
import locales from '../lib/locales.js';
import { strict as assert } from 'assert';

describe('Instance DateHandler', () => {
	it('expect locale en when args are empty ', () => {
		const Dates = new DateHandler(3);
		assert.equal(Dates.locale, locales.en);
	});

	it('expect locale en when is not define ', () => {
		const Dates = new DateHandler({});
		assert.equal(Dates.locale, locales.en);
	});

	it('expect locale es when is define ', () => {
		const Dates = new DateHandler({ locale: 'es' });
		assert.equal(Dates.locale, locales.es);
	});
});
