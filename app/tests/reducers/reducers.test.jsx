import expect from 'expect';
import {searchTextReducer,showCompletedReducer} from 'reducers';
import df from 'deep-freeze-strict';

describe('Reducers',()=>{
    describe('searchTextReducer',()=>{
        it('Should Exist',()=>{
            expect(searchTextReducer).toExist();
        });
        it('Should set searchText',()=>{
            var action ={
                type:'SET_SEARCH_TEXT',
                searchText: 'dog'
            }
            var res = searchTextReducer(df(''),df(action));
            expect(res).toEqual(action.searchText)
        });
        it('Should set searchText no-deep-freeze',()=>{
            var action ={
                type:'SET_SEARCH_TEXT',
                searchText: 'cat'
            }
            var res = searchTextReducer('',action);
            expect(res).toEqual(action.searchText)
        });
        
    });
    describe('showCompletedReducer',()=>{
        it('Should Exist',()=>{
            expect(showCompletedReducer).toExist();
        });
        it('Should toggle state',()=>{
            var action ={
                type:'TOGGLE_SHOW_COMPLETED'                
            }
            var flag = true;

            var res = showCompletedReducer(df(flag),df(action));
            expect(res).toBe(!flag);
        });
    });
})