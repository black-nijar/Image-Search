import React, { Component } from 'react'

class ImageList extends Component {
  render() {
    const { images } = this.props;
    const List = images.length ? (
      images.map(image => {
        console.log('image :',image)
        return (
          <div  key={image.id}>
            <div className='images'>
               <div style={{textAlign:'center'}}>
                <img
                  className='img-fluid img-thumbnail'
                  alt={image.alt_description}
                  key={image.id}
                  src={image.urls.regular}
                />
              </div>
            </div>
          </div>
        )
      })
    ) : (
        <div className='no-image'
             style={{ width: '450px', margin: 'auto' }}>
          Use different key words...
      </div>
      )
    return (
      <div>
        <div className='image-list'>
          {List}
        </div>
      </div>
    )
  }
}

export default ImageList
