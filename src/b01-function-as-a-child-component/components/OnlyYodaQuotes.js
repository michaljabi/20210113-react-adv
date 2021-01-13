import React from 'react'
import MemorableQuotes from './MemorableQuotes'
import Quotes from '../Quotes'

function OnlyYodaQuotes ( { isLoading, quotes } ) {
	return (
		<div className="col-6">
			<h2> Cytaty tylko Yoda </h2>
			{isLoading && <div className="alert alert-info"> ładowanie... </div>}
			{!isLoading && (
				<ul className="list-group">
					{
						quotes.map( ( q ) => (
							<li key={q.text} className="list-group-item">
								<h6 className="text-right">{q.author}</h6>
								<div>{q.text}</div>
							</li>)
						)
					}
				</ul>
			)}

			<Quotes>
				{
					({isLoading, quotes}) => {
						const yodaQuotes = quotes.filter(q => q.author === 'Darth Vader')
						return (
							<>
								<MemorableQuotes quotes={yodaQuotes} isLoading={isLoading} />
							</>
						)
					}
				}
			</Quotes>

		</div>
	)
}

export default OnlyYodaQuotes;
