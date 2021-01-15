
const someIntroLib = {
	greetings(who = 'nobody') {
		 return 'Greetings ' + who;
	},
	makeATuple(a, b) {
		if(!a || !b) {
			throw new Error('You need to provide both arguments!');
		}
		return [a, b]
	},
	refundTwoTimes(refundCallback) {
		refundCallback(100)
		refundCallback(200)
	}
}

export default someIntroLib;
