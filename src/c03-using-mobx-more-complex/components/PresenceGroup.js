import React from 'react'

function PresenceGroup ({presence, onChangePresence}) {
	const isActive = (arg) => presence === arg ? 'active' : '';
	const isOutline = (arg) => presence !== arg ? 'outline-' : '';

	return (
		<div className="btn-group ml-auto" role="group" aria-label="Obecność">
			<button
				className={`btn btn-${isOutline('UNCONFIRMED')}danger ${isActive('UNCONFIRMED')}`}
				onClick={() => onChangePresence('UNCONFIRMED')}
			>
				Nie przyjdzie
			</button>
			<button
				className={`btn btn-${isOutline('MAYBE')}secondary ${isActive('MAYBE')}`}
				onClick={() => onChangePresence('MAYBE')}
			>
				może..
			</button>
			<button
				className={`btn btn-${isOutline('CONFIRMED')}success ${isActive('CONFIRMED')}`}
				onClick={() => onChangePresence('CONFIRMED')}
			>
				TAK ! będzie
			</button>
		</div>
	)
}

export default PresenceGroup
