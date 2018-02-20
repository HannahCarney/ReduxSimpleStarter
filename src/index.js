import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCRl2e6hYTVX3X4uvgruHtbFUzoGa4frAc';

// Create a new component.
// some HTML

//const is an 
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
};

//Take this component's generated HTML and put ot
//on the page (in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));
