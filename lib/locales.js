import { es, pt, enUS, ptBR } from 'date-fns/locale';

export default {
	es: {
		...es,
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
	default: {
		...enUS,
		words: {
			from: 'from',
			to: 'to',
			today: 'Today',
			tomorrow: 'Mañana',
			at: 'at'
		}
	}
};
