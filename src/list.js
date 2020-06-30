import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { connect } from 'react-redux';
import InitializeFromStateForm from './InitializeFromStateForm';
import { add, edit } from './actionslist';

export const listReducer = (
	state = {
		rowData: [
			{
				make: 'Toyota',
				model: 'Celica',
				price: 35000
			},
			{
				make: 'Ford',
				model: 'Mondeo',
				price: 32000
			},
			{
				make: 'Porsche',
				model: 'Boxter',
				price: 72000
			}
		]
	},
	action
) => {
	switch (action.type) {
		case 'add': {
			let rowData = state.rowData.slice();
			rowData.push(action.data);
			return { rowData };
		}
		case 'edit':
			return { data: action.data };
		default:
			return state;
	}
};

/**
 * Simulates data loaded into this listReducer from somewhere
 */

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columnDefs: [
				{
					headerName: 'Make',
					field: 'make',
					sortable: true,
					editable: true
				},
				{
					headerName: 'Model',
					editable: true,
					field: 'model',
					sortable: true
				},
				{
					headerName: 'Price',
					editable: true,
					field: 'price',
					sortable: true
				}
			]
		};
	}
	render() {
		console.log(this.props);
		return (
			<div
				className="ag-theme-alpine"
				style={{
					height: '250px',
					width: '600px'
				}}
			>
				<AgGridReact columnDefs={this.state.columnDefs} rowData={this.props.rowData} />
				<InitializeFromStateForm />
			</div>
		);
	}
}

List = connect(
	(state) => {
		return { rowData: state.rowData };
	},
	{ add: add, edit: edit } // bind account loading action creator
)(List);

export default List;
