/**
 * The `translate` function takes a string and a locale object as input, and replaces each word in the
 * string with its corresponding translation from the locale object if available.
 * @param string - The `string` parameter is the input text that you want to translate.
 * @param locale - The `locale` parameter is an object that contains key-value pairs where the key is a
 * word in the original language and the value is the translation of that word in the desired language.
 * @returns The `translate` function is being returned.
 */
const translate = (string, locale) => {
	return string.replace(/\b\w+\b/g, (word) => {
		return locale?.words[word] || word;
	});
};

export default translate;
