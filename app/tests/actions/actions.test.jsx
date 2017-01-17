import expect from 'expect';
import actions,{setSearchText, addTodo, toggleTodo,toggleShowCompeleted,addTodos} from 'actions';

describe('Actions',()=>{
    it('Should Exist',()=>{
        expect(setSearchText).toExist();
    })
    it('Should generate search text action', ()=>{
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'dog'
        };
        var res = setSearchText(action.searchText);
        expect(res).toEqual(action);
    });
    it('Should generate add todo action',()=>{
        var action = {
            type: 'ADD_TODO',
            text: 'Walk the dog'
        }
        var res = addTodo(action.text);
        expect(res).toEqual(action);
    });
    it('Should generate add todos action',()=>{
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
        }
        var res = addTodos(todos);
        expect(res).toEqual(action);
    });
    
    it('Should toggle show completed',()=>{
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        var res = toggleShowCompeleted()
        expect(res).toEqual(action);
    });
    
    it('Should toggle todo',()=>{
        var action = {
            type: 'TOGGLE_TODO',
            id: 1
        }
        var res = toggleTodo(action.id)
        expect(res).toEqual(action);
    });

})