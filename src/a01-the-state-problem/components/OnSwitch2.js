import React from 'react'

class OnSwitch extends React.Component {

	state = {
		isOn: true
	}

	render () {
		return (
			<button className="btn btn-secondary btn-lg" onClick={() => this.setState(s => ({isOn: !s.isOn}))}>
				Przełącz { this.state.isOn ? '💡' : '💤'}
			</button>
		)
	}
}

export default OnSwitch;
