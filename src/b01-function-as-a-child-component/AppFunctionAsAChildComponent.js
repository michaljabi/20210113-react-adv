import React from 'react'
import Quotes from './Quotes'
import MemorableQuotes from './components/MemorableQuotes'
import OnlyYodaQuotes from './components/OnlyYodaQuotes'

function AppFunctionAsAChildComponent () {
	return (
		<div>
			<header className="jumbotron text-center bg-dark text-light">
				<h1> #B01. Function as a Child component </h1>
			</header>
			<main className="container">
				   <div className="row">
					   <Quotes>
						   {
						   	({isLoading, quotes}) => {
							    const yodaQuotes = quotes.filter(q => q.author === 'Yoda')
						   	  return (
						   	  	<>
								      <MemorableQuotes quotes={quotes} isLoading={isLoading} />
								      <OnlyYodaQuotes quotes={yodaQuotes} isLoading={isLoading} />
							      </>
						      )
						   }
						   }
					   </Quotes>


				   </div>
			</main>
		</div>
	)
}

export default AppFunctionAsAChildComponent
