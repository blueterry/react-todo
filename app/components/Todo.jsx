import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {toggleTodo} from 'actions';

export /*only used by test file*/class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleToggleTodo = this.handleToggleTodo.bind(this);
    }
    handleToggleTodo(){
        //alert(id);
        var theId = this.refs.todoId.value;
        //this.props.onToggle(theId);
    }
    render() {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassName = completed?'todo todo-completed':'todo';
        var renderDate = ()=>{
            var message = 'Created ';
            var timestamp = createdAt;
            if(completed){
                message = 'Completed ';
                timestamp = completedAt;
            }
            return message + moment.unix(timestamp).format('YYYY-MM-DD @ h:mm:ss a');
        };
        return (
            <div className={todoClassName} onClick={()=>{
                //this.handleToggleTodo
                dispatch(toggleTodo(id));
            }} id={id}>
                <input type="hidden" ref="todoId" value={id}/>
                <div><input type="checkbox" checked={completed}/></div>
                <div>
                <p>                    
                    {text}
                </p>
                <p className="todo__subtext">
                    {renderDate()}
                </p>
                </div>
            </div>
        );
    }
}

export default connect()(Todo);//Todo;