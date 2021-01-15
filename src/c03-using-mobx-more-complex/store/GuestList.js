import { makeAutoObservable } from 'mobx'
import { Guest } from './Guest'

export class GuestList {

	  constructor (initialList) {
		  this.guests = initialList;
		  makeAutoObservable(this);
	  }

	  addGuestToList = (name) => {
	  	this.guests = [...this.guests, new Guest(name)]
		  // this.guests.push(new Guest(name))
	  }

	  removeGuest = (guest) => {
		  this.guests = this.guests.filter(g => g !== guest)
		  // this.guests.splice(this.guests.indexOf(guest), 1)
	  }
}
