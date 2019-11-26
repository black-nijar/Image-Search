import React, { Component } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar';
import unsplash from './Components/unsplash';


class App extends Component {
  
  handleSubmit = async (e) => {
    console.log('Submit:',e);
    const res = await unsplash.get(`search/photos`, {
      params: { query: e}
    })
    console.log('res:',res);
  }
  render() {
    return (
      <div className='container' style={{marginTop:'10px'}}>
        <h2 className='welcome'>Welcome</h2>
        <SearchBar onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App
