import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Components/navbar.css'

function NavBar() {
  return (
    <div className=''>
        <div className='navbar-div'>
            <Navbar bg="dark" data-bs-theme="dark" className='px-5 py-3'>
            
              <Nav className="me-auto d-flex gap-3 navlinks">
                <Nav.Link href="#home" className='navlink'>Home</Nav.Link>
                <Nav.Link href="#features" className='navlink'>About Us</Nav.Link>
                <Nav.Link href="#pricing" className='navlink'>Contact Us</Nav.Link>
              </Nav>
              <div className="navbuttons d-flex gap-5">
                <div className="sell px-3 py-2 rounded">
                    <button>Sell your Items</button>
                </div>
                <div className="sell px-3 py-2 rounded">
                    <button>how To Bid</button>
                </div>
                <div className="services px-3 py-2 rounded">
                    <button>Services</button>
                </div>
                
          </div>
          </Navbar>
          
        </div>
    </div>
  )
}

export default NavBar