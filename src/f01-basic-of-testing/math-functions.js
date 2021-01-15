
function numTypeCheck(num) {
	throw new Error(`Value ${num} is wrong - please provide a number...`)
}

const mathFunctions = {
	sumNumbers(...all) {
		return all.reduce((a, b) => a + b, 0);
	},
	pickMaxNumber(a = 0, b = 0, c = 0) {
		numTypeCheck(a);
		numTypeCheck(b);
		numTypeCheck(c);
		const result = Math.max(a, b, c);
		return `Your Max is ${result} ! 😀`;
	},
	stringToNumber(str) {
		const result = parseFloat(str);
		return isNaN(result) ? 0 : result;
	}
}
export default mathFunctions;
