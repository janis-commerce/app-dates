import { es, pt, enUS, ptBR } from 'date-fns/locale';

export default {
	es: {
		...es,
		dateFormat: 'dd/MM HH:mm',
		words: {
			from: 'desde',
			to: 'hasta',
			today: 'Hoy',
			tomorrow: 'Mañana',
			at: 'a las'
		}
	},
	pt: {
		...pt,
		words: {
			from: 'desde',
			to: 'hasta',
			today: 'Hoy',
			tomorrow: 'Mañana',
			at: 'às'
		}
	},
	'pt-BR': {
		...ptBR,
		words: {
			from: 'das',
			to: 'às',
			today: 'Hoje',
			tomorrow: 'Amanhã',
			at: 'às'
		}
	},
	en: {
		...enUS,
		dateFormat: 'MM/dd HH:mm',
		words: {
			from: 'from',
			to: 'to',
			today: 'Today',
			tomorrow: 'Tomorrow',
			at: 'at'
		}
	}
};
