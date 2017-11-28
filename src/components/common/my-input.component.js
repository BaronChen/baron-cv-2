import React, { Component } from 'react';
import { FormGroup, Label, Input, Alert } from 'reactstrap';

export default class MyInput extends Component {
	render() {
		const { input, meta: { error, touched }, label, isTextArea, icon } = this.props
		let isError = touched && error && error !== '';
		let state = isError ? 'warning' : null;
		let type = isTextArea ? 'textarea' : null;
		let rows = isTextArea ? 8 : null;
		return (
			<FormGroup color={state}>
				<Label for="name">{label}</Label>
				<div className="input-group">
					{ icon }
					<Input {...input} className="form-control" name="name" state={state} type={type} rows={rows}
						ref={(input) => { this.nameInput = input; }} />
				</div>
				{isError ?
					<Alert color="warning" className="mt-2">
						{error}
					</Alert>
					: null
				}
			</FormGroup>
		)
	}
}