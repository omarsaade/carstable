import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import List, { listReducer } from './list';
import { Provider } from 'react-redux';

const store = createStore(listReducer);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<List />
			</Provider>
		);
	}
}

export default App;
