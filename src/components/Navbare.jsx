import React, { useState } from 'react'
import { Navbar,Nav,Container,Form,Button  } from 'react-bootstrap'
import ReactStars from 'react-stars'
import MovieCard from './MovieCard'
import './Navbare.css'



const Navbare = ({handleSearch,ratingChanged}) => {
  const input=(e)=>{
    let text=e.target.value
    handleSearch(text)

  }

  return (
    <div className='navigation'>

<Navbar bg="dark" variant="dark">
        <Container className='cont'>
          <Navbar.Brand >TUNIFLIX</Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Brand >Home</Navbar.Brand>
            <Navbar.Brand >Top Rated</Navbar.Brand>
          </Nav>
        </Container>

        <ReactStars className='starss'
    count={5}
    onChange={ratingChanged}
    size={24}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />

        <Navbar.Brand >
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Type here to search.."
              className="me-2"
              aria-label="Search"
              onChange={input}
            />

            <Button >Search</Button>
          </Form>
          </Navbar.Brand>
      </Navbar>
      
    </div>
  )
}

export default Navbare