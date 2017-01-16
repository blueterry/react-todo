import $ from 'jquery';

var TodoAPI ={ //Maybe can find a better way 
    
    setTodos(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos',JSON.stringify(todos));
            return todos;
        }
    },
    getTodos(){
        var strTodos = localStorage.getItem('todos');
        var todos = [];
        try{
            todos = JSON.parse(strTodos);
        }
        catch(e){            
        }
        
        return $.isArray(todos)?todos:[];
    }
};
export default TodoAPI;