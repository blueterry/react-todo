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
    describe('filterTodos',()=>{
        var todos = [{
            id: 1,
            text: 'line 1 Text',
            completed: true
        },{
            id: 2,
            text: 'line 2 text',
            completed: false
        },{
            id: 3,
            text: 'line 3',
            completed: false
        }];

        it('Should return all items when showCompleted is true',()=>{
            var fTodos = TodoAPI.filterTodos(todos,true,'');
            expect(fTodos.length).toBe(3);
        });
        it('Should return only non-completed items when showCompleted is false',()=>{
            var fTodos = TodoAPI.filterTodos(todos,false,'');
            expect(fTodos.length).toBe(2);
        });
        it('Should sort by completed status',()=>{
            var fTodos = TodoAPI.filterTodos(todos, true, '');
            expect(fTodos[0].completed).toBe(false);
            expect(fTodos[2].completed).toBe(true);
        });

        it('Should filter by search text',()=>{
            var fTodos = TodoAPI.filterTodos(todos, true, 'text');
            expect(fTodos.length).toBe(2);
        });
        it('Should return all todos',()=>{
            var fTodos = TodoAPI.filterTodos(todos, true, '');            
            expect(fTodos.length).toBe(3);
        });


    });
});