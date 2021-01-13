import React from 'react'

function MemorableQuotes ( { isLoading, quotes } ) {
	return (
		<div className="col-6">
			<h2> Wszystkie cytaty </h2>
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
		</div>
	)
}

export default MemorableQuotes
