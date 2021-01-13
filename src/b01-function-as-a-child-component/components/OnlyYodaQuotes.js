import React, { Component } from 'react'
import swQuotesService from '../services/swQuotesService'

class OnlyYodaQuotes extends Component {

	state = {
		isLoading: false,
		quotes: []
	}

	loadAllTheQuotes() {
		this.setState({isLoading: true})
		swQuotesService.getAll()
			.then((quotes) => {
				const yodaQuotes = quotes.filter(q => q.author === 'Yoda')
				this.setState({quotes: yodaQuotes, isLoading: false})
			})
	}

	componentDidMount () {
		this.loadAllTheQuotes();
	}

	render () {
		const { isLoading, quotes } = this.state;
		return (
			<div className="col-6">
				<h2> Cytaty tylko Yoda </h2>
				{ isLoading && <div className="alert alert-info"> ładowanie... </div> }
				{ !isLoading && (
					<ul className="list-group">
						{
							quotes.map((q) => (
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
}

export default OnlyYodaQuotes
