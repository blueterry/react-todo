import React, {Component} from 'react';

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
        var {id, text, completed} = this.props;
        return (
            <div onClick={this.handleToggleTodo} id={id}>
                <input type="hidden" ref="todoId" value={id}/>
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        );
    }
}

export default Todo;