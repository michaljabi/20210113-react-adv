
import React from 'react'
import PropTypes from 'prop-types'

import LightBulb from './components/LightBulb'
import OnSwitch from './components/OnSwitch'


class AppTheStateProblem extends React.Component {

	static propTypes = {
		title: PropTypes.string
	}

	static defaultProps = {
		title: '#A01. The State problem'
	}

	state = {
		toggle: true
	}

	handleToggle = () => {
		this.setState(s => ({toggle: !s.toggle}))
	}

	render () {

		const { toggle } = this.state;

		return (
			<div>
				<header className="jumbotron text-center bg-dark text-light">
					<h1> {this.props.title} </h1>
				</header>
				<main className="container">
					<div className="row">
						<div className="col-12 mb-5">
							<LightBulb isOn={toggle} />
						</div>
						<div className="col-6 text-right">
							<OnSwitch isOn={toggle} onToggle={this.handleToggle} />
						</div>
						<div className="col-6">
							<OnSwitch isOn={toggle} onToggle={() => this.setState(s => ({toggle: !s.toggle})) } />
						</div>
					</div>
					<OnSwitch isOn={false}  />
				</main>
			</div>
		)
	}
}

export default AppTheStateProblem
