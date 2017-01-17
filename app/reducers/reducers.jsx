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
}