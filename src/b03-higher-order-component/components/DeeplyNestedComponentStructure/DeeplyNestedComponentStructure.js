import React from 'react'
import AnotherLevelOfMadness from './AnotherLevelOfMadness'
import { userService } from '../hoc/state-of-data'

function DeeplyNestedComponentStructure () {
	userService.setUser('Janina', 'Nowak');
	return (
		<div>
			 <AnotherLevelOfMadness/>
			 <pre>
				 {
					 JSON.stringify(userService.getUser(), null, 2)
				 }
			 </pre>
		</div>
	)
}

export default DeeplyNestedComponentStructure
