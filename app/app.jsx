
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';

import actions,{addTodo, setSearchText, toggleShowCompeleted} from 'actions';
import {configStore} from 'configStore';
console.log('the store:', configStore);
var store = configStore();
store.subscribe(()=>{
    console.log('New state', store.getState());
});

store.dispatch(addTodo('Clean the desk'));
store.dispatch(setSearchText('desk'));
store.dispatch(toggleShowCompeleted());

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
