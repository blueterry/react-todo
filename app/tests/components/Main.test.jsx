import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {Provider} from  'react-redux';
import {configStore} from 'configStore';

import TodoList from 'TodoList';

import {Main} from 'Main';
import {Todo} from 'Todo';

describe('TodoApp',()=>{
    it('Should Exist', ()=>{
        expect(Main).toExist();
    });
    
    it('Should Render TodoList',()=>{
        var store = configStore();
        var provider  = TestUtils.renderIntoDocument(<Provider store={store}><Main></Main></Provider>);
        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, Main)[0];
        var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

        expect(todoList.length).toEqual(1);
    })
});