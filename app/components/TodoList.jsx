import React, {Component} from 'react';
import Todo from 'Todo';
import {connect} from 'react-redux';
import TodoAPI, {filterTodos} from 'TodoAPI';

export /*test perpose*/class TodoList extends Component {
    render() {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos=()=>{
            if(todos.length === 0){
                return(
                    <p className="container__message">Nothing to Do</p>
                );
            }
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo)=>{
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
        return state;
    }
)(TodoList); //TodoList;