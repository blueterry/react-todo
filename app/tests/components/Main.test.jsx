import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {Provider} from  'react-redux';
import {configStore} from 'configStore';

import {TodoList} from 'TodoList';

import ConnMain from 'Main';
import {Todo} from 'Todo';

describe('TodoApp',()=>{
    it('Should Exist', ()=>{
        expect(ConnMain).toExist();
    });
    
    it('Should Render TodoList',()=>{
        var Todos = [{
            id:1,
            text: 'Do sth',
            completed: false,
            completedAt: undefined,
            createdAt: 500         
        },{
            id: 2,
            text: 'Walk the dog',
            completed: false,
            completedAt: undefined,
            createdAt: 500
        }];
        var store = configStore({todos:Todos});
        //console.log('store',store);
        var provider  = TestUtils.renderIntoDocument(<Provider store={store}><ConnMain/></Provider>);
        //console.log('provider', provider);
        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, ConnMain)[0];
        //console.log('todoApp', todoApp);
        var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

        expect(todoList.length).toEqual(1);
    })
});