import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {AddTodo} from 'AddTodo';

describe('AddTodo',()=>{
    it('Should Exist', ()=>{
        expect(AddTodo).toExist();
    });

    it('Should dispatch ADD_TODO when valid data input',()=>{
        var newTodoText = "Check Email";
        var action = {
            type:'ADD_TODO',
            text: newTodoText
        }
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        
        addTodo.refs.NewTodo.value = newTodoText;
        TestUtils.Simulate.click($el.find('button')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
    it('Should NOT dispatch ADD_TODO when Invalid input',()=>{
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        var newTodoText = "";

        addTodo.refs.NewTodo.value = newTodoText;
        TestUtils.Simulate.click($el.find('button')[0]);

        expect(spy).toNotHaveBeenCalled();
    })
})