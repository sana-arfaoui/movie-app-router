import React, { useState } from 'react';
import {NavDropdown,Nav,Navbar,Container,Form,Button} from "react-bootstrap"; 
import ReactStars from "react-rating-stars-component";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

function NavBar(props) {
  
  const handleClick=(event)=>{
    props.setSearch(event.target.value)
    
  };
 
  const ratingChanged=(newRating)=>{
   console.log(props.setRate(newRating)) 
  }
  const handleReset=(event)=>{
window.location.reload();
props.setRate(0);
  }
 
  
  return (
    <Navbar  expand="lg" className='Navbar'>
      <Container fluid>
        <Navbar.Brand href="#" className="primary" style={{color:'white'}}>MOVIE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            


  <ReactStars
                        count={5}
                        onChange={(newRating) => ratingChanged(newRating)}
                        size={30}
                        activeColor="#ffd700"
                    />
                    <button type="reset" onClick={(event)=>handleReset(event)} style={{padding:'10px' ,width:'80px',border:'1px solid black', borderRadius:'5px', backgroundColor:'white'}}>Reset</button>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event)=>handleClick(event)}
              
            />
            <Button style={{color:'white'}} variant="outline-success" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    
  );
}

export default NavBar;