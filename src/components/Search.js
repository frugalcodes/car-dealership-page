import React from 'react';
import '../styles/Search.css'
import icon from '../images/icon.svg'

const Search = () => {

  return (
    <div className="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
    <button
    className="btn"
    style={{ backgroundColor: "#1A89EC", borderColor: "#1A89EC" }} // Set background color
    type="button"
    id="button-addon2"
  >
    <img
      src={icon}
      alt="icon"
      className="icon-color" // Add a class for icon color
    />
  </button>
  </div>


  );
};


export default Search;
