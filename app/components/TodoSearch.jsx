import React, {Component} from 'react';

class TodoSearch extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleSearch(){
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;
        
        this.props.onSearch(showCompleted, searchText);
    }
    render() {
        return (
            <div className="row">
                <div>
                    <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label htmlFor="test">
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}

export default TodoSearch;