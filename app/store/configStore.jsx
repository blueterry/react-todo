import redux,{combineReducers,compose, createStore} from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

export var configStore =  (initialState={})=>{
        var reducer = combineReducers({
                searchText: searchTextReducer,
                showCompleted: showCompletedReducer,
                todos: todosReducer
        });
        //console.log('reducer',reducer);
        var store = createStore(reducer, initialState, compose(
                window.devToolsExtension? window.devToolsExtension():f =>f
        ));
        return store;
//console.log('store', store);
};