import React, { Component } from 'react';
//same as const Component = React.Component;

//gives search bar a bunch of functonality from the React.Component class
//we want this to communicate with other components so we promote from functional component to class based component
//adds additional functionality 
class SearchBar extends Component {

    constructor(props) {
        super(props);
        //reannitialize state in a class based component
        //initalize variables and state etc. 
        //properties we want to record on state
        this.state = { term: '' };
    } 
    render() {
        //all input elements emmit a change vanilia event
        //single line arrow function
        return <input onChange={event => console.log(event.target.value)}/>;

    }
    //this or handleInputChange in react community

}

export default SearchBar;