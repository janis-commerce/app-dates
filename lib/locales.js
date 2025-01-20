import { es, pt, enUS, ptBR } from 'date-fns/locale';

export default {
	es: {
		...es,
		customFormat: {
			dateWithYear: 'dd MMM yyyy, HH:mm',
			dayAndMonth: 'dd MMM',
			hours: 'HH:mm',
			singleDate: 'dd MMM, HH:mm'
		},
		words: {
			hours: 'hs',
			from: 'desde',
			to: 'hasta',
			today: 'hoy',
			Today: 'Hoy',
			tomorrow: 'mañana',
			Tomorrow: 'Mañana',
			at: 'a las',
			Until: 'Hasta'
		}
	},
	pt: {
		...pt,
		customFormat: {
			dateWithYear: 'dd MMM yyyy, HH:mm',
			dayAndMonth: 'dd MMM',
			hours: 'HH:mm',
			singleDate: 'dd MMM, HH:mm'
		},
		words: {
			hours: 'hs',
			from: 'das',
			to: 'às',
			today: 'hoje',
			Today: 'Hoje',
			tomorrow: 'amanhã',
			Tomorrow: 'Amanhã',
			at: 'às',
			Until: 'Até'
		}
	},
	'pt-BR': {
		...ptBR,
		customFormat: {
			dateWithYear: 'dd MMM yyyy, HH:mm',
			dayAndMonth: 'dd MMM',
			hours: 'HH:mm',
			singleDate: 'dd MMM, HH:mm'
		},
		words: {
			hours: 'hs',
			from: 'das',
			to: 'às',
			today: 'hoje',
			Today: 'Hoje',
			tomorrow: 'amanhã',
			Tomorrow: 'Amanhã',
			at: 'às',
			Until: 'Até'
		}
	},
	en: {
		...enUS,
		customFormat: {
			dateWithYear: 'MMM dd yyyy, HH:mm',
			dayAndMonth: 'MMM dd',
			hours: 'HH:mm',
			singleDate: 'MMM dd, HH:mm'
		},
		words: {
			hours: 'hs',
			from: 'from',
			to: 'to',
			today: 'today',
			Today: 'today',
			tomorrow: 'tomorrow',
			Tomorrow: 'Tomorrow',
			at: 'at',
			Until: 'Until'
		}
	}
};
