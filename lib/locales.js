import { es, pt, enUS, ptBR } from 'date-fns/locale';

const mapperLanguages = {
	'es-AR': 'es',
	'es-NI': 'es',
	'es-CL': 'es',
	'es-PE': 'es',
	'es-GT': 'es',
	'en-US': 'en'
};

export { mapperLanguages };

const ptFormat = {
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
};

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
		...ptFormat
	},
	'pt-BR': {
		...ptBR,
		...ptFormat
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
			hours: '',
			from: 'from',
			to: 'to',
			today: 'today',
			Today: 'Today',
			tomorrow: 'tomorrow',
			Tomorrow: 'Tomorrow',
			at: 'at',
			Until: 'Until'
		}
	}
};
