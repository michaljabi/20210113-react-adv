import { makeAutoObservable } from 'mobx'
import { Guest } from './Guest'

export class GuestList {

		guests = [];

	  constructor (initialList) {
		  makeAutoObservable(this);
		  this.guests = initialList;
	  }

	  addGuestToList = (name) => {
	  	this.guests = [...this.guests, new Guest(name)]
	  }

	  removeGuest = (guest) => {
		  this.guests = this.guests.filter(g => g !== guest)
	  }
}
