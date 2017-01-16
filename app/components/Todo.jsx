import React, {Component} from 'react';
import moment from 'moment';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleToggleTodo = this.handleToggleTodo.bind(this);
    }
    handleToggleTodo(){
        //alert(id);
        var theId = this.refs.todoId.value;
        this.props.onToggle(theId);
    }
    render() {
        var {id, text, completed, createdAt, completedAt} = this.props;
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
            <div className={todoClassName} onClick={this.handleToggleTodo} id={id}>
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

export default Todo;