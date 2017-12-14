import React, { Component } from 'react'
import './App.css'
import AppRouter from './router/AppRouter'

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <AppRouter/>
        <AppFooter/>
      </div>
    );
  }
}

export default App;
