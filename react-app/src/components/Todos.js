import React, {Component} from 'react';
import Todo from './Todo';

class Todos extends Component {
	render() {
		let todo; 
		todo = this.props.todos.map(todo => {
			return(
			<Todo key = {todo.id} todo= {todo}/>);
		});

		return (
			<div className="Todos">
				Todos!
				{todo}
			</div>
		);
	}
}

export default Todos;