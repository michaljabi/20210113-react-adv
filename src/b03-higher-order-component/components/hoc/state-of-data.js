
// To jest jedno miejsce w pamięci:
let myUser = {}

// To jeszcze nie jest w 100% poprawne ale mamy 80% sukecsu !:
// export const MessageContext = React.createContext(myUser);

export const userService = {
	setUser(name, lastName) {
		myUser = {
			name,
			lastName
		}
		// BRAKUJE NAM: .setState !
	},
	getUser() {
		return myUser;
	}
}

