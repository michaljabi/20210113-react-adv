import { useState } from 'react'
import IAlsoNeedADate from './IAlsoNeedADate'

function AnotherLevelOfMadness () {

	const [show, setShow] = useState(true);

	// const Component = withDate(({date}) => (
	// 	<div>{date.toISOString()}</div>
	// ))

	return (
		<div>
			{show && <IAlsoNeedADate />}
			<button onClick={() => setShow(!show)}>Toggle</button>
		</div>
	)
}

export default AnotherLevelOfMadness
