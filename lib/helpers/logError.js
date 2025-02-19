const {
	env: { NODE_ENV }
} = process;

/**
 * The logError function logs the provided arguments to the console only if the NODE_ENV environment
 * variable is set to 'development'.
 * @param args - The `args` parameter in the `logError` function is a rest parameter, which allows the
 * function to accept any number of arguments as an array. This means that `args` will be an array
 * containing all the arguments passed to the `logError` function when it is called.
 * @returns console.log(...args)
 */

export default (...args) => {
	if (NODE_ENV === 'development') return console.log(...args);
};
