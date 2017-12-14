import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
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
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/films">Films</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/planets">Planets</Link></li>
        <li><Link to="/species">Species</Link></li>
        <li><Link to="/starships">Starships</Link></li>
        <li><Link to="/vehicles">Vehicles</Link></li>
      </ul>
      <hr/>
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
