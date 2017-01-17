import uuid from 'node-uuid';
import moment from 'moment';

export var searchTextReducer =(state='', action) =>{
    //action.sudd = 2; --- for deep-freeze-strict 
    switch(action.type){
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    };
};

export var showCompletedReducer =(state=false, action)=>{
    switch (action.type){
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
};

export var todosReducer = (state=[], action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return[                
                {
                    id:uuid(),
                    text:action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                },
                ...state
            ];
        case 'TOGGLE_TODO':
            return state.map((todo)=>{
                if(todo.id === action.id){
                    var flag = !todo.completed;
                    return{    
                        ...todo,
                        completed : flag,
                        completedAt: flag? moment().unix():undefined                    
                    }
                }
                return todo;
            });
        case 'ADD_TODOS':
            return[
                ...state,
                ...action.todos
            ];
            
        default: 
            return state;
    }
};