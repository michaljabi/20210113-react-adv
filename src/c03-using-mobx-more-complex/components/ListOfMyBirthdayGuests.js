import React from 'react'
import { observer, Observer } from 'mobx-react-lite'
import GuestItem from './GuestItem'
import { guestListStore } from '../store/store'

function ListOfMyBirthdayGuests ({list = [], removeGuestFromList}) {
	console.log('rerender !')
	return (
		<div>
			  <h2>Lista moich gości</h2>
				<ul className="list-group">
					{
						list.map(
							(guest) => <Observer key={guest.id}>
								{
									() => <GuestItem
										{...guest}
										onChange={( params ) => guest.changePresence( params.presence )}
										onRemove={() => removeGuestFromList( guest )}
									/>
								}
							</Observer>
						)
					}
				</ul>
		</div>
	)
}

export default observer(() => {
	return <ListOfMyBirthdayGuests list={guestListStore.guests} removeGuestFromList={guestListStore.removeGuest} />
});
