import React, { Component } from 'react'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Website building with technology React.JS'
    }
  }

  render () {
    return (
      <div className="Footer">
        <p>{ this.state.title }</p>
      </div>
    )
  }
}

export default Footer
