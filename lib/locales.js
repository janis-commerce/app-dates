import { es, pt, enUS, ptBR } from 'date-fns/locale';

export default {
	es: {
		...es,
		dateFormat: "dd MMM, HH:mm 'hours'",
		dateFormatYear: 'dd/MM/yyyy HH:mm',
		dayFormat: 'dd MMM',
		hourFormat: 'HH:mm',
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
		dateFormat: "dd MMM, HH:mm 'hours'",
		dayFormat: 'dd MMM',
		dateFormatYear: 'dd/MM/yyyy HH:mm',
		hourFormat: 'HH:mm',
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
		dateFormat: "dd MMM, HH:mm 'hours'",
		dayFormat: 'dd MMM',
		dateFormatYear: 'dd/MM/yyyy HH:mm',
		hourFormat: 'HH:mm',
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
		dateFormat: "MMM dd, HH:mm 'hours'",
		dayFormat: 'MMM dd',
		dateFormatYear: 'MM/dd/yyyy HH:mm',
		hourFormat: 'HH:mm',
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
