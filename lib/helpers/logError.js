const {
	env: { NODE_ENV }
} = process;

const logError = (...args) => {
	if (NODE_ENV === 'development') return console.log(...args);
};

export default logError;
