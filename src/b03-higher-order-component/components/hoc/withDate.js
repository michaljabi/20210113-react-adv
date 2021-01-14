
// HMMMMM to to by mógł być teoretycznie STAN GLOBALNY !?
const todayIs = new Date();
console.log('I will be imported !')


export default function withDate(Component) {


	// console.log(todayIs.toISOString());

	return function WithDate(props) {
		  return <Component {...props} date={todayIs} />
	}
}
