import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {Todo} from 'Todo';

describe('Todo',()=>{
    it('Should Exist', ()=>{
        expect(Todo).toExist();
    });

    it('Should dispatch TOGGLE_TODO action on click',()=>{
        var todoData={
            id: 123,
            text: 'todo.test.jsx',
            completed: true
        };

        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(todo));
        //console.log('$el:',$el);
        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_TODO',
            id: todoData.id
        })
        //expect(parseInt($el[0].id)).toBe(todoData.id);
    });
});