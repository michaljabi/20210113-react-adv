import React from 'react'
import PresenceGroup from './PresenceGroup'

function GuestItem ({id, name, presence, onChange, onRemove}) {
	return (
		<li className="list-group-item">
			<div className="d-flex justify-content-between">
				<h5 className="pt-1 ml-4">{name}</h5>
				<PresenceGroup
					presence={presence}
					onChangePresence={(presence) => onChange({id, presence})}
				/>
				<div className="ml-4">
					<button className="btn btn-danger" onClick={() => onRemove(id)}> X </button>
				</div>
			</div>
		</li>
	)
}

export default GuestItem
