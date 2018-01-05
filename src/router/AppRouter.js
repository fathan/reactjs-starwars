import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './../views/Home/Home'
import Films from './../views/Films/Films'
import People from './../views/People/People'
import Planets from './../views/Planets/Planets'
import Species from './../views/Species/Species'
import Starships from './../views/Starships/Starships'
import Vehicles from './../views/Vehicles/Vehicles'

const Routing = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/films" component={Films}/>
      <Route path="/people" component={People}/>
      <Route path="/planets" component={Planets}/>
      <Route path="/species" component={Species}/>
      <Route path="/starships" component={Starships}/>
      <Route path="/vehicles" component={Vehicles}/>
    </div>
  </Router>
)

export default Routing
