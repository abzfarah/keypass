import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch'
import List from './List'
import './index.css';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    
  }

  render() {
    return (
        <div className="search">
          <input className="grommetux-input grommetux-search-input__input" autoComplete="off" placeholder="Search"
          onChange={this.props.onInputChange}
          />
  
        </div>

      );
    }
}//`http://www.omdbapi.com/?s=${this.state.term}`
export default SearchBox