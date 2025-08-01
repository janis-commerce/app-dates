import { es, pt, enUS, ptBR } from 'date-fns/locale';

// Mapper de idiomas - mapea variantes regionales a su idioma base
const languageMapper = {
	'es-AR': 'es',
	'es-NI': 'es',
	'es-CL': 'es',
	'es-PE': 'es',
	'es-GT': 'es',
	'en-US': 'en'
};

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

// Configuraciones de locales base
const locales = {
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

/**
 * Mapea un idioma con variante regional a su idioma base
 * @param {string} language - El código de idioma (ej: 'es-AR', 'en-US', 'pt-BR')
 * @returns {string} - El código de idioma base mapeado (ej: 'es', 'en', 'pt')
 */
const mapLanguage = (language) => {
	return languageMapper[language] || language;
};

/**
 * Obtiene la configuración de locale para un idioma específico
 * @param {string} language - El código de idioma (ej: 'es-AR', 'en-US', 'pt-BR')
 * @returns {Object} - La configuración de locale correspondiente
 */
const getLocale = (language) => {
	const mappedLanguage = mapLanguage(language);
	return locales[mappedLanguage] || locales.en; // Fallback a inglés si no existe
};

// Exportaciones nombradas
export { languageMapper, mapLanguage, locales };

// Exportación por defecto - la función principal para obtener locales
export default getLocale;
