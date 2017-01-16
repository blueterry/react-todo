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
            <div onClick={this.handleToggleTodo} id={id}>
                <input type="hidden" ref="todoId" value={id}/>
                <p>
                    <input type="checkbox" checked={completed}/>
                    {text}
                </p>
                <p>{renderDate()}</p>
            </div>
        );
    }
}

export default Todo;