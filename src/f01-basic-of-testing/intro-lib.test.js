import someIntroLib from './intro-lib'

describe('intro-lib', () => {

	it('should show greetings for Mike', () => {
		//ARRANGE / given
		const name = 'Mike';
		//ACT / when
		const result = someIntroLib.greetings(name);
		//ASSERT / then
		expect(result).toBe('Greetings Mike')
	})

	it('should show greetings for nobody when no argument given', () => {
		//ACT / when
		const result = someIntroLib.greetings();
		//ASSERT / then
		expect(result).toBe('Greetings nobody')
	})

	describe('makeATuple', () => {

		  it('should make tuple from 2 values', () => {
			    const result = someIntroLib.makeATuple(1, 2);

			    expect(result).toEqual([1, 2])
		  })

			it('should throw error when only 1 argument given', () => {
				  expect(() => {
				  	someIntroLib.makeATuple('2')
				  }).toThrowError('You need to provide both arguments!')
			})

			it('should throw error when no argument given', () => {
				expect(() => {
					someIntroLib.makeATuple()
				}).toThrowError('You need to provide both arguments!')
			})
	})

	describe('refund100TwoTimes', () => {

		it('should call the function 2 times', () => {
			//ARRANGE / given
			const callMeBack = jest.fn();
			//ACT / when
			someIntroLib.refundTwoTimes(callMeBack);
			//ASSERT / then
			expect(callMeBack).toHaveBeenCalledTimes(2)
		})

		it('should call the function with 100 then 200', () => {
			const callMeBack = jest.fn();

			someIntroLib.refundTwoTimes(callMeBack);

			expect(callMeBack).toHaveBeenNthCalledWith(1, 100)
			expect(callMeBack).toHaveBeenNthCalledWith(2, 200)
		})
	})
})
