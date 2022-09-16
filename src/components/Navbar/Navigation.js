import React from 'react';
import{Container} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './Navigation.scss';


const Navigation = () => {
  return (
   <>
      <Navbar className='nav ' bg='white' variant='light' expand='md' collapseOnSelect>
<Container className='p-0' >
  <Navbar.Brand className='nav-brand' href='/main' f>Zero.<span>Academy</span></Navbar.Brand>
  <Navbar.Toggle  aria-controls='responsive-navbar-nav' />
  <Navbar.Collapse id='responsive-navbar-nav'>
<Nav className='me-auto nav-group' >
  <Nav.Link href='/main' >Главная</Nav.Link>
  <Nav.Link href='/courses'>Курсы</Nav.Link>
  <Nav.Link href='/about-us'>О нас</Nav.Link>
</Nav>
<Button     className='nav-btn-login btn-primary'> Login</Button>
<Button  className='nav-btn-signup  btn-primary'> Sign up</Button>
  </Navbar.Collapse>
</Container>

</Navbar>
  </>
  )
}

export default Navigation
