import { v4 } from 'node-uuid'
import { makeAutoObservable } from 'mobx'

export class Guest {
		id = v4();
		name = '';
	  presence = 'UNCONFIRMED'

	  constructor (name, presence= 'UNCONFIRMED') {
	  	this.name = name;
	  	this.presence = presence;
		  makeAutoObservable(this);
	  }

		changePresence = (presence) => {
		  this.presence = presence
		}
}
