import expect from 'expect';
import {searchTextReducer,showCompletedReducer,todosReducer} from 'reducers';
import moment from 'moment';
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
    describe('todosReducer',()=>{
        it('Should Exist',()=>{
            expect(todosReducer).toExist();
        });
        it('Should add new todo',()=>{
            var action ={
                type:'ADD_TODO',
                text:'Walk the dog'
            }
            var res = todosReducer(df([]),df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('Should toggle the Todo',()=>{
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            }
            var todos =[
                {
                    id:0,
                    text: 'Feed the dog',
                    completed: false,
                    completedAt: undefined,
                    createdat: moment().unix()
                },
                {
                    id:1,
                    text: 'Walk the dog',
                    completed: false,
                    completedAt: undefined,
                    createdat: moment().unix()
                },
                {
                    id:2,
                    text: 'Go swimming',
                    completed: true,
                    completedAt: moment().unix(),
                    createdat: moment().unix()
                }
            ]
            var res = todosReducer(df(todos),df(action));
            //console.log('res:',res);
            expect(res.length).toEqual(todos.length);
            expect(res[1].completed).toNotEqual(todos[1].completed);
            //console.log('res[0]',res[0]);
            expect(res[0].completed).toEqual(todos[0].completed);
            expect(res[2].completed).toEqual(todos[2].completed);
            expect(res[1].completedAt).toBeA('number');

            var res2 = todosReducer(df(res), df(action));
            expect(res2).toEqual(todos);
        });
        it('Should add existing todos',()=>{
            var todos = [{
                id:111,
                text: 'Walk the dog',
                completed: false,
                completedAt: undefined,
                createdAt: 3330000
            }];
            var action = {
                type: 'ADD_TODOS',
                todos
            };
            var res = todosReducer(df([]),df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
     
})