import mathFunctions from './math-functions'

describe('math-functions', () => {

	it('should pick the max number form 3 given', () => {
		 const max = mathFunctions.pickMaxNumber(10, 20, 30);

		 expect(max).toEqual('Your Max is 30 ! 😀');
	})

	it('should return 0 when no numbers given JIRA:928', () => {
		const max = mathFunctions.pickMaxNumber();

		expect(max).toEqual('Your Max is 0 ! 😀');
	})

	it('should throw wen any of args not a number', () => {
		 expect(() => {
			 mathFunctions.pickMaxNumber('!');
		 }).toThrowError('Value ! is wrong - please provide a number...')

		expect(() => {
			mathFunctions.pickMaxNumber(0, 'c');
		}).toThrowError('Value c is wrong - please provide a number...')

		expect(() => {
			mathFunctions.pickMaxNumber(0, 0, true);
		}).toThrowError('Value true is wrong - please provide a number...')
	})
})
