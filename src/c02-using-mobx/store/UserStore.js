import { makeAutoObservable } from 'mobx'

export class UserStore {
	name = 'Michał';
	isAuth = true;

	constructor () {
		makeAutoObservable(this);
	}

	logInUser = (name) => {
		this.name = name;
		this.isAuth = true;
	}

	logOutUser = () => {
		this.isAuth = false;
	}
}
