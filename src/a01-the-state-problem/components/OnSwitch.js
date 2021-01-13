import React from 'react'
import PropTypes from 'prop-types'

OnSwitch.propTypes = {
	isOn: PropTypes.bool.isRequired,
	onToggle: PropTypes.func
}

OnSwitch.defaultProps = {
	onToggle: () => { console.log('Not implemented') }
}

function OnSwitch ( {isOn, onToggle} ) {
	return (
		<button className="btn btn-secondary btn-lg" onClick={() => onToggle()}>
			Przełącz {isOn ? '💡' : '💤'}
		</button>
	)
}

export default OnSwitch
