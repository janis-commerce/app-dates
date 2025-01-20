import { es, pt, enUS, ptBR } from 'date-fns/locale';

export default {
	es: {
		...es,
		customFormat: {
			date: "dd MMM, HH:mm 'hours'",
			deadline: "'Hasta' dd MMM, HH:mm 'hours'",
			dateWithYear: 'dd/MM/yyyy HH:mm',
			dayAndMonth: 'dd MMM',
			hour: 'HH:mm',
			// old keys
			dateFormat: "dd MMM, HH:mm 'hours'",
			singleDateFormat: "'Hasta' dd MMM, HH:mm 'hours'",
			dateFormatYear: 'dd/MM/yyyy HH:mm',
			dayFormat: 'dd MMM',
			hourFormat: 'HH:mm'
		},
		words: {
			hours: 'hs',
			from: 'desde',
			to: 'hasta',
			today: 'Hoy',
			tomorrow: 'Mañana',
			at: 'a las',
			Until: 'Hasta'
		}
	},
	pt: {
		...pt,
		customFormat: {
			dateFormat: "dd MMM, HH:mm 'hours'",
			dayFormat: 'dd MMM',
			singleDateFormat: "'Até' Hasta dd MMM, HH:mm 'hours'",
			dateFormatYear: 'dd/MM/yyyy HH:mm',
			hourFormat: 'HH:mm'
		},
		words: {
			hours: 'hs',
			from: 'desde',
			to: 'hasta',
			today: 'Hoy',
			tomorrow: 'Mañana',
			at: 'às',
			Until: 'Até'
		}
	},
	'pt-BR': {
		...ptBR,
		customFormat: {
			dateFormat: "dd MMM, HH:mm 'hours'",
			dayFormat: 'dd MMM',
			singleDateFormat: "'Até' Hasta dd MMM, HH:mm 'hours'",
			dateFormatYear: 'dd/MM/yyyy HH:mm',
			hourFormat: 'HH:mm'
		},
		words: {
			hours: 'hs',
			from: 'das',
			to: 'às',
			today: 'Hoje',
			tomorrow: 'Amanhã',
			at: 'às',
			Until: 'Até'
		}
	},
	en: {
		...enUS,
		customFormat: {
			dateFormat: "MMM dd, HH:mm 'hours'",
			dayFormat: 'MMM dd',
			singleDateFormat: "'Until' MMM dd, HH:mm 'hours'",
			dateFormatYear: 'MM/dd/yyyy HH:mm',
			hourFormat: 'HH:mm'
		},
		words: {
			hours: 'hs',
			from: 'from',
			to: 'to',
			today: 'Today',
			tomorrow: 'Tomorrow',
			at: 'at',
			Until: 'Until'
		}
	}
};
