import React, { Component } from 'react'

class AppFooter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'SWAPI building with React.JS'
    }
  }

  render () {
    return (
      <div className="AppFooter">
        <p>{ this.state.title }</p>
      </div>
    )
  }
}

export default AppFooter
