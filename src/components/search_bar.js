/**
 * Created by fazbat on 3/11/2016.
 */

import React, {Component} from "react";


class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term: ""};
    }

    render(){
        return (
           <div className="search-bar">
               <input type="text"
                      onChange={(event)=> {this.onInputChange(event.target.value)}}
                      value = {this.state.term}
               />
           </div>
        );
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
