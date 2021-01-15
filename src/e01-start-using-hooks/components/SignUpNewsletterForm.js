import React, { Component } from 'react'

class SignUpNewsletterForm extends Component {

	state = {
		email: ''
	}

	handleFormSubmit = (ev) => {
		ev.preventDefault();
		console.log('Wysyłam ajax\'a z e-mailem:', this.state.email)
		this.setState({email: ''})
	}

	render () {
		return (
			<form className="w-50 m-auto" onSubmit={this.handleFormSubmit}>
				<h3>Zapisz się do newslettera: </h3>
				<div className="input-group mt-3">
					<label className="m-1 font-weight-bold mr-2">Adres e-mail:</label>
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon">@</span>
					</div>
					<input type="text"
					       className="form-control"
					       placeholder="Podaj adres e-mail"
					       aria-label="Adres e-mail"
					       aria-describedby="basic-addon"
					       onChange={({target}) => this.setState({email: target.value})}
					       value={this.state.email}
					/>
				</div>
				<div className="text-right mt-2">
					<button className="btn btn-primary" type="submit"> Zapisz na listę </button>
				</div>
				<hr/>
			</form>
		)
	}
}

export default SignUpNewsletterForm
