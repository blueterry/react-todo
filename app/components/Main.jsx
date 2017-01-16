import React, {Component} from 'react';
import Nav from 'Nav';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                },{
                    id: uuid(),
                    text: 'Clean the yard'
                },{
                    id: uuid(),
                    text: 'Feed the cat'
                },{
                    id: uuid(),
                    text: 'Clean the desk'
                }
            ]
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }
    
    render() {
        var {todos} = this.state;
        return (
            <div>                
                <Nav />
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">                        
                        <TodoSearch onSearch={this.handleSearch}/>                       
                        <TodoList todos={todos}/>
                        <AddTodo onNewTodo={this.handleAddTodo}/>
                    </div>
                </div>
            </div>

        );
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
                    text: text
                },
                ...this.state.todos
            ]
        })
    }
}

export default Main;