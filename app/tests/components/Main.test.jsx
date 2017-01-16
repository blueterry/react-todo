import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Main from 'Main';
import Todo from 'Todo';

describe('TodoApp',()=>{
    it('Should Exist', ()=>{
        expect(Main).toExist();
    });
    it('Should add todo to the list on handleAddTodo',()=>{
        var todoText = 'Test Text';
        var todoApp = TestUtils.renderIntoDocument(<Main/>);

        todoApp.setState({todos:[]});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });
    it('Should toggle completed value when handleToggle called',()=>{
       var todoData = {
           id:  11,
           text: 'Test todo',
           completed : false
       }

       var todoApp = TestUtils.renderIntoDocument(<Main/>);
       todoApp.setState({todos:[todoData]});

       //var $el = $(ReactDOM.findDOMNode(todoApp));
       //console.log('the Div',$el.find('#11')[0]);

       expect(todoApp.state.todos[0].completed).toBe(false);
       todoApp.handleToggle(11);
       //TestUtils.Simulate.click($el.find('#11')[0]);
       expect(todoApp.state.todos[0].completed).toBe(true);


    });
});