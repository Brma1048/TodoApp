import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
  markComplete = () => {

  }
  render(){
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

// PropTypes (hier kann man setzen was für ein Type die Props haben und ob sie erforderlich sind (isRequired))
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,

}

export default Todos;
