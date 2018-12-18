import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import './App.scss';
import Todo from './Todo/Todo'
import { TodoStore } from './stores/TodoStore'

class App extends Component {
	render() {
		return (
			<Provider store={TodoStore}>
				<div className="App">
					<Todo />
				</div>
			</Provider>
		);
	}
}

export default App;
