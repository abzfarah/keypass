import React, { Component } from 'react';
import List from './List'
import './index.css';
import SearchBox from './SearchBox'

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        term: ''
    }
    this._onInputChange = this._onInputChange.bind(this)
  }

  _onInputChange (event) {
    if (this.state.term === '' && event.target.value !== '') {
        this.props.router.push('/list')
    }

    this.setState({ 
        term: event.target.value 
    })

  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        term: this.state.term
      })
    })

    return (
      <div className="container" id={this.props.id}>
        <SearchBox onInputChange={this._onInputChange}/>
        { children }
      </div>
      );
    }
}

export default AppContainer