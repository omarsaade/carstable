import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, edit } from './actionslist';
class Form extends Component {
	state = {
		make: '',
		model: '',
		price: ''
	};
	render() {
		return (
			<form
				onSubmit={(e) => {
					e.preventDefault();
					this.props.add(this.state);
				}}
			>
				<div>
					<label>Make</label>
					<div>
						<input
							type="text"
							value={this.state.make}
							onChange={(event) => {
								this.setState({
									make: event.target.value
								});
							}}
						/>
					</div>
				</div>
				<div>
					<label>Model</label>
					<div>
						<input
							type="text"
							onChange={(event) => {
								this.setState({
									model: event.target.value
								});
							}}
						/>
					</div>
				</div>
				<div>
					<label>Price</label>
					<div>
						<input
							type="text"
							onChange={(event) => {
								this.setState({
									price: event.target.value
								});
							}}
						/>
					</div>
				</div>

				<div>
					<input type="submit" value="Submit" />
				</div>
			</form>
		);
	}
}
Form = connect(null, { add, edit })(Form);

export default Form;
// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
