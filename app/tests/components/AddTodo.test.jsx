import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo',()=>{
    it('Should Exist', ()=>{
        expect(AddTodo).toExist();
    });

    it('Should call addTodo with valid data',()=>{
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        var newTodoText = "Check Email";

        addTodo.refs.NewTodo.value = newTodoText;
        TestUtils.Simulate.click($el.find('button')[0]);

        expect(spy).toHaveBeenCalledWith(newTodoText);
    });
    it('Should NOT call addTodo with Invalid data',()=>{
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        var newTodoText = "";

        addTodo.refs.NewTodo.value = newTodoText;
        TestUtils.Simulate.click($el.find('button')[0]);

        expect(spy).toNotHaveBeenCalled();
    })
})