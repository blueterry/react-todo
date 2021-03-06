import $ from 'jquery';

//var TodoAPI ={ //Maybe can find a better way  --- 1

export default {  
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
    },
    filterTodos(todos, showCompleted,searchText){
        var filteredTodos = todos;

        //Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo)=>{
            return showCompleted || !todo.completed
        });

        //Filter by searchText
        filteredTodos = filteredTodos.filter((todo)=>{
            return searchText.length <= 0 || todo.text.toLowerCase().indexOf(searchText.toLowerCase()) >=0;
        });

        //Sort todos with non-completed first
        filteredTodos.sort((a,b)=>{
            if(!a.completed && b.completed){
                return -1;
            }else if(a.completed && !b.completed){
                return 1;
            }else{
                return 0;
            }
        });

        return filteredTodos;
    }  
};

//export default TodoAPI; ---- 1