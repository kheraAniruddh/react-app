import React, {Component} from 'react';


class Todo extends Component {
	render() {
		return (
			<li className="Todo">
				{this.props.todo.userId} : {this.props.todo.title}
			</li>
		);
	}
}

export default Todo;