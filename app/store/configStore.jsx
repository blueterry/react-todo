import redux,{combineReducers,compose, createStore} from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

var reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
});
console.log('reducer',reducer);
export var store = createStore(reducer, compose(
        window.devToolsExtension? window.devToolsExtension():f =>f
));
console.log('store', store);