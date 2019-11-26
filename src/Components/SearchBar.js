import React, { Component } from 'react'

class SearchBar extends Component {
  handleInput = e => {
    e.preventDefault();
    console.log('changed', e.target.value)
    this.props.onSubmit(e.target.value)
  }
  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleInput}>
          <div className='image-form'>
            <label htmlFor='search-image'>Search your favourite pics</label>
            <input
              className='form-control'
              type='text'
              placeholder='Search images'
              onChange={this.handleInput}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
