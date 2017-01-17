
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';

import actions,{addTodo, setSearchText, toggleShowCompeleted} from 'actions';
import {store} from 'configStore';
console.log('the store:', store);

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
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            
        </Route>
    </Router>,
    document.getElementById('app')
);
