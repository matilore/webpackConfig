import React from 'react'

class MainContainer extends React.Component {
  render () {
    return (
      <div>
          <h1>Basic webpack configuration for React</h1>
          <img src="images/react.svg" className='image' id='react' />
          <img src="images/webpack.svg" className='image' id='webpack' />
      </div>
    )
  }
}

export default MainContainer
