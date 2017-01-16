import React, {Component} from 'react';
import Nav from 'Nav';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoAPI from 'TodoAPI';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    componentDidUpdate(){
        TodoAPI.setTodos(this.state.todos);
    }
    render() {
        var {todos, showCompleted, searchText} = this.state;
        var fTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>                
                <Nav />
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">                        
                        <TodoSearch onSearch={this.handleSearch}/>                       
                        <TodoList todos={fTodos} onToggle={this.handleToggle}/>
                        <AddTodo onNewTodo={this.handleAddTodo}/>
                    </div>
                </div>
            </div>
        );
    }
    handleToggle(id){
        //console.log('id:',id);
        //alert('from main got the ID:'+ id);
        var updatedTodos = this.state.todos.map((todo)=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed? moment().unix():undefined;
            }            
            return todo;
        });
        this.setState({todos:updatedTodos});
    }
    handleSearch(chk, text){
        this.setState({
            showCompleted : chk,
            searchText: text.toLowerCase()
        });
    }
    handleAddTodo(text){
        //alert('new todo:'+text);
        this.setState({
            todos:[                
                {
                    id: uuid(),//this.state.todos.length+1,
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                },
                ...this.state.todos
            ]
        })
    }
}

export default Main;