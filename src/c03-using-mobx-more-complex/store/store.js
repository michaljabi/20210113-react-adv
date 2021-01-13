import { GuestList } from './GuestList'
import { Guest } from './Guest'

export const guestListStore = new GuestList(
	[
		new Guest('Nicole McClure', 'CONFIRMED'),
		new Guest('Giovanni Moen', 'MAYBE'),
		new Guest('Deanna Schulist', 'CONFIRMED'),
		new Guest('Reinhold Goyette', 'UNCONFIRMED'),
		new Guest('Danielle Moore','MAYBE'),
		new Guest('Dr. Moises Walter', 'CONFIRMED'),
		new Guest('Woodrow Bednar','MAYBE')
	]
);
