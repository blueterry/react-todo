import React, {Component} from 'react';
import Nav from 'Nav';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id:1,
                    text: 'Walk the dog'
                },{
                    id:2,
                    text: 'Clean the yard'
                },{
                    id:3,
                    text: 'Feed the cat'
                },{
                    id:4,
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
        alert('new todo:'+text);
    }
}

export default Main;