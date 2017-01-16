import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI',()=>{
    beforeEach(()=>{
        localStorage.removeItem('todos');
    });
    it('Should exist',()=>{
        expect(TodoAPI).toExist();
    });

    describe('setTodos',()=>{
        it('Should set valid todos array',()=>{
            var todos= [{
                id: 22,
                text: 'test all files',
                completed: false
            }];
            TodoAPI.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });
        it('Should NOT set invalid todos array',()=>{
            var todos = {a:'b'};
            TodoAPI.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toBe(null);
        });
    });
    describe('getTodos',()=>{
        it('Should return empty array for bad localStorage data',()=>{
            var aTodos = TodoAPI.getTodos();
            expect(aTodos).toEqual([]);
        });
        it('Should return a valid todo list from localStorage',()=>{
            var todos= [{
                id: 22,
                text: 'test all files',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            expect(TodoAPI.getTodos()).toEqual(todos);
        });       

    });
});