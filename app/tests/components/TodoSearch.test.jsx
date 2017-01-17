import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch',()=>{
    it('Should Exist', ()=>{
        expect(TodoSearch).toExist();
    });

    it('Should dispatch SET_SEARCH_TEXT on input text entered',()=>{
        var searchText = "dog";
        var action={
            type:'SET_SEARCH_TEXT',
            searchText
        }
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />)
        todoSearch.refs.searchText.value = searchText;

        TestUtils.Simulate.change(todoSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('Should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked',()=>{
        var action={
            type:'TOGGLE_SHOW_COMPLETED'            
        }
        //var checked = true;
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />)        
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });
    
});