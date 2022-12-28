import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const NavBar = ({handleFilter}) => {
  return (
    <Container id='nav-bar'>
      <Navbar id="box"   >
        <Container>
          <Link  to={'/'} ><Navbar.Brand href="#">React<span id='flix' >flix</span></Navbar.Brand></Link>
        </Container>
        <Filter handleFilter={handleFilter} />
      </Navbar>
    </Container>
  )
}

export default NavBar