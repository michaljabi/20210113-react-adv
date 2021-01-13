import React from 'react'
import PropTypes from 'prop-types'
import swQuotesService from './services/swQuotesService'

class Quotes extends React.Component {

	static propTypes = {
		children: PropTypes.func.isRequired
	}

	state = {
		isLoading: false,
		quotes: []
	}

	loadAllTheQuotes() {
		this.setState({isLoading: true})
		swQuotesService.getAll()
			.then((quotes) => {
				this.setState({quotes, isLoading: false})
			})
	}

	componentDidMount () {
		this.loadAllTheQuotes();
	}

	render () {
		return this.props.children(this.state);
	}
}

export default Quotes;
