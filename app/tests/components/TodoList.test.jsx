import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

//var Todo = require('Todo');

describe('TodoList',()=>{
    beforeEach(()=>{
        localStorage.removeItem('todos');
    });
    it('Should Exist', ()=>{
        expect(TodoList).toExist();
    });

    it('Should render one Todo component for each todo item',()=>{
        var Todos = [{
            id:1,
            text: 'Do sth'            
        },{
            id: 2,
            text: 'Walk the dog'
        }];
        expect(Todos.length).toBe(2);
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={Todos}/>);        
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);

        expect(todosComponents.length).toBe(Todos.length);
    });

    it('Should render empty message if no todos',()=>{
        var Todos = [];
        expect(Todos.length).toBe(0);
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={Todos}/>);        
        var $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container__message').length).toBe(1);
    });
});