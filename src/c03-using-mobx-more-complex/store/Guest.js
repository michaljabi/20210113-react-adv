import { v4 } from 'node-uuid'
import { makeAutoObservable } from 'mobx'

export class Guest {
		id = v4();
		name = '';
	  presence = 'UNCONFIRMED'

	  constructor (name, presence= 'UNCONFIRMED') {
	  	makeAutoObservable(this);
	  	this.name = name;
	  	this.presence = presence;
	  }

		changePresence = (presence) => {
		  this.presence = presence
		}
}
