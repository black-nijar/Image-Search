import React, { Component } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar';
import unsplash from './Components/unsplash';
import { connect } from 'react-redux'
import { imageAction } from './actions/imageAction';
import ImageList from './Components/ImageList';

class App extends Component {

  handleSubmit = async (e) => {
    const res = await unsplash.get(`search/photos`, {
      params: { query: e }
    })
    this.props.addImage(res.data.results)
  }
  render() {
    return (
      <div className='container' style={{ marginTop: '10px' }}>
        <h2 className='welcome'>Welcome</h2>
        <SearchBar onSubmit={this.handleSubmit} /><br />
        <h2 className='thumbnail-gallery'>Thumbnail Gallery - {this.props.images.length}</h2>
        <hr className="mt-2 mb-5" /><br />
        <ImageList images={this.props.images} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addImage: (images) => { dispatch(imageAction(images)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
