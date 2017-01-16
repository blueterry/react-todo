import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Main from 'Main';

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
})