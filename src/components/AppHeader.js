import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'

class AppHeader extends React.Component {
  constructor(props){
  	super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">SWAPI</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Router>
              <div>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/films">Films</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/people/">People</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/planets/">Planets</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/species/">Species</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/starships/">Starships</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/vehicles/">Vehicles</NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Router>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default AppHeader
