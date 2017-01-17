import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSearchText, toggleShowCompeleted} from 'actions';

export /*for testing only*/class TodoSearch extends Component {
    constructor(props) {
        super(props);
    //    this.handleSearch = this.handleSearch.bind(this);
    }
    
    // handleSearch(){
    //     var showCompleted = this.refs.showCompleted.checked;
    //     var searchText = this.refs.searchText.value;
        
    //     this.props.onSearch(showCompleted, searchText);
    // }
    
    render() {
        var {dispatch, showCompleted, searchText} = this.props;
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search Todos" value={searchText} onChange={()=>{
                        var searchText = this.refs.searchText.value;
                        dispatch(setSearchText(searchText));
                    }}/>
                </div>
                <div>
                    <label htmlFor="test">
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{                            
                            dispatch(toggleShowCompeleted());
                        }}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}

export default connect(
(state)=>{
    return{
        showCompleted: state.showCompleted,
        searchText: state.searchText
    }
}
)(TodoSearch);