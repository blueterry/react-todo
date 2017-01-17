import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addTodo} from 'actions';

export /*for test*/class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.submitNewTodo = this.submitNewTodo.bind(this);
    }
    
    render() {
        return (
            <div className="container__footer">
                <input className="text" placeholder="input new Todo" type="text" ref="NewTodo"/>
                <button className="button expanded" onClick={this.submitNewTodo}>Add Todo</button>
            </div>
        );
    }
    submitNewTodo(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var newText = this.refs.NewTodo.value;
        if(newText.length > 0){
            //this.props.onNewTodo(newText);
            this.refs.NewTodo.value = '';
            dispatch(addTodo(newText));
        } else{
            this.refs.NewTodo.focus();
        }
    }
}

export default connect()(AddTodo);