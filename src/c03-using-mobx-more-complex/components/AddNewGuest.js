import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { guestListStore } from '../store/store'
import { observer } from 'mobx-react-lite'

class AddNewGuest extends Component {

	static propTypes = {
		addGuestToList: PropTypes.func.isRequired
	}

	state = {
		name: ''
	}

	handleNameChange = ({target}) => {
		this.setState({name: target.value})
	}

	handleAddClick = () => {
		const {addGuestToList} = this.props;
		const {name} = this.state;
		addGuestToList(name);
		this.setState({name: ''})
	}

	render () {
		const {name} = this.state;
		return (
			<div className="d-flex justify-content-end">
				<label className="font-weight-bold mr-2">Dodaj nowego gościa: </label>
				<input onChange={this.handleNameChange} value={name}/>
				<button className="btn btn-primary btn-sm" onClick={this.handleAddClick}> Dodaj</button>
			</div>
		)
	}
}


export default observer(() => <AddNewGuest addGuestToList={guestListStore.addGuestToList} />);
