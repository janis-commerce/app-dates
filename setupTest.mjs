/* eslint-disable no-undef */
import sinon from 'sinon';

// Define la fecha fija que quieres usar en formato UTC (ej. 24 de octubre de 2024 a las 15:00 en UTC)
const fixedDateUTC = new Date('2024-10-18T15:00:00Z');

// Offset de UTC-3 en milisegundos
const utcOffsetInMilliseconds = -3 * 60 * 60 * 1000;

// Ajustamos la fecha para reflejar UTC-3
const mockDate = new Date(fixedDateUTC.getTime() + utcOffsetInMilliseconds);
console.log('mockDate :>> ', mockDate);
console.log('mock', Intl.DateTimeFormat().resolvedOptions().timeZone);
let clock;

before(() => {
	// Mockear el reloj para que use la fecha fija ajustada a UTC-3
	clock = sinon.useFakeTimers(mockDate.getTime());
});

after(() => {
	// Restaurar el reloj después de todos los tests
	clock.restore();
});
