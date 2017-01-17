
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';

import actions,{addTodo, setSearchText, toggleShowCompeleted,addTodos} from 'actions';
import {configStore} from 'configStore';

import TodoAPI from 'TodoAPI';

console.log('the store:', configStore);
var store = configStore();
store.subscribe(()=>{
    var state = store.getState();
    console.log('New state', store.getState());
    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));

//store.dispatch(addTodo('Clean the desk'));
//store.dispatch(setSearchText('desk'));
//store.dispatch(toggleShowCompeleted());

//Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css') -- done in webpackconfig.js sassLoader
$(document).foundation();

//App css
require('style!css!sass!appStyles');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
