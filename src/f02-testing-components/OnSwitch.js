import { Component } from 'react'

class OnSwitch extends Component {

	state = {
		isOn: true
	}

	handleToggle = () => {
		this.setState(s => ({isOn: !s.isOn}))
	}

	render () {
		return (
			<div className="text-center">
				<h1 className="mb-5">{ this.state.isOn ? '💡' : '💤'}</h1>
				<button className="btn btn-secondary btn-lg" onClick={this.handleToggle}>
					Przełącz
				</button>
			</div>
		)
	}
}

export default OnSwitch;
