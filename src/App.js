import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import { useState , useEffect } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import React from 'react'
import './App.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }


  useEffect(()=>{
    //what I want to do as a side effect
    console.log("new count is ",count);
  },[
    count
    //dependacy array
  ])

  return (
    <div>
      <h1>Hello useEffect</h1>
      <p>This is like side effect</p>


      <span className='title'>The counter</span>
      <p className='subtitle'> the count is {count}</p>
      <button onClick={decrement} className='btn'>-</button>
      <button onClick={increment} className='btn'>+</button>

    </div>
  )
}

export default App


//------routers-v6-----------------------------------------------------------------------------------------------------------

{/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Home Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter> */}


//------Event handeling-----------------------------------------------------------------------------------------------------------------

// function btnClick() {
//   console.log("Button is clicked!")
// }


{/* <h1 className='acc'>React Event Handling</h1>
      <hr></hr>
      <button onClick={btnClick}>Click Me</button>
*/}



//-------------React-Bootstrap---------------------------------------------------------------------------------------------------------

// import React from 'react'
// import './App.css'
// import Accordion from 'react-bootstrap/Accordion';

// function App(){
//   return(
//     <div>
//       <h1>Raect Bootstrap</h1>
//       <div className='acc'>
//       <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Accordion Item #1</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Accordion Item #2</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//       </div>
//     </div>
//   )
// }

// export default App




//------------------REACT BOOTSTRAP---------------------------------------------------------------------------------------------------------------


// import './App.css';
// import PartOne from './components/PartOne'

// function App() {

//   // let count = 0;
//     // count +=1;
//     // count -=1;

//   return (
// <div className='App'>
//   <span className='title'>The counter</span>
//   <p className='subtitle'> the count is {count}</p>
//   <button onClick ={decrement}className='btn'>-</button>
//   <button onClick ={increment}className='btn'>+</button>
//     </div>
//   );
// }

// export default App;

//-------------------------react-components------------------------------------------------------------------------------------------------------------

// {/* <Home /> */ }

// {/* <h1>Home page</h1>
// <PartOne/>
// <PartOne/>
// <PartOne/>
// <PartOne/> */}