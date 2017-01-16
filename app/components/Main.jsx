import React, {Component} from 'react';
import Nav from 'Nav';
import TodoList from 'TodoList';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
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
    }
    
    render() {
        var {todos} = this.state;
        return (
            <div>                
                <Nav />
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">                        
                        {this.props.children}     
                    </div> 
                    <TodoList todos={todos}/>
                </div>
            </div>
        );
    }
}

export default Main;