import DateHandler from '../lib/index.js';
import { locales } from '../lib/locales.js';
import { strict as assert } from 'assert';
import { spy } from 'sinon';

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

	it('should call logError (console.error) when debug is true and an error occurs', () => {
		const errorSpy = spy(console, 'error');
		const Dates = new DateHandler({ debug: true });
		Dates.format('invalid-date', '');
		Dates.formatDelivery('invalid-date', '');

		assert.equal(errorSpy.called, true);
		assert(errorSpy.calledTwice);
		assert(errorSpy.calledWith('Argument must be a valid Date'));

		errorSpy.restore();
	});
});
