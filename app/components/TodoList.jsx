import React, {Component} from 'react';
import Todo from 'Todo';
import {connect} from 'react-redux';

export /*test perpose*/class TodoList extends Component {
    render() {
        var {todos} = this.props;
        var renderTodos=()=>{
            if(todos.length === 0){
                return(
                    <p className="container__message">Nothing to Do</p>
                );
            }
            return todos.map((todo)=>{
                return (
                    <Todo key={todo.id} {...todo} />
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

export default connect(
    (state)=>{
        return{
            todos : state.todos
        };
    }
)(TodoList); //TodoList;