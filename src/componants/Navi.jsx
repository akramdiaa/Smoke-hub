import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import React from 'react'
import MovingComponent from 'react-moving-text'

const JustContainer = styled.div`
  display: flex;
  flex-direction: row;

`

const Animation = styled.div`

transition: 200ms;
  &:hover{
    
    transform: scale(1.3);
    transition: all 0.2s ease-out;
  }
`
const DorpAnimation = styled.div`

transition: 200ms;
  &:hover{
    margin: 10px;
    transform: scale(1.1);
    transition: 500ms;
    transition: all 0.2s ease-out;
  }
`
const InsideDorpAnimation = styled.div`

transition: 200ms;
  &:hover{
    margin: 10px;
    transform: scale(0.95);
    transition: 500ms;
    transition: all 0.2s ease-out;
  }
`

const TextStyle = styled.div`

	box-sizing: border-box;
	--noOfItems: 13;

  
h1 {
	width: 12rem;
	height:12rem;
	position: relative;
	text-align: center;
	background: url("https://p.kindpng.com/picc/s/49-495072_transparent-picsart-smoke-clipart-open-mouth-skull-drawing.png");
  mix-blend-mode: multiply;
	background-repeat: no-repeat;
    background-position: center;
    background-size: 80px; 
	border-radius: 60%;
  font-size: 30px;
  font-weight: bolder;
}

span {
	--units: -2;
	--rotationUnit: calc((1turn / var(--noOfItems)) * var(--units, 1));
	position: absolute;
	width: calc(100% - 2rem);
	height: calc(100% - 2rem);
	top: 1rem;
	left: 1rem;
	transform: rotate(var(--rotationUnit));
	transform-origin: center;
	
	&:nth-child(2) { --units: -1; }
	&:nth-child(3) { --units: 0; }
	&:nth-child(4) { --units: 1; }
	&:nth-child(5) { --units: 2; }
	&:nth-child(6) { --units: 5.5; }
	&:nth-child(7) { --units: 6.5; }
	&:nth-child(8) { --units: 7.5; }

}
  
`

const Navi = () => {
  return (
    
 
      
    <div style={{height:"0px",width:"0px",color: "black"}}>
      

       <TextStyle>
       <MovingComponent
          type="glowing"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease-in-out"
          iteration="infinite"
          fillMode="none">
              <h1>
              <span>S</span>
              <span>M</span>
              <span>O</span>
              <span>K</span>
              <span>E</span>
              <span>H</span>
              <span>U</span>
              <span>B</span>
            </h1>
            </MovingComponent>
  </TextStyle>



        <Navbar fixed="top" style={{backgroundColor:"transparent"}} expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Brand ></Navbar.Brand>
            <Navbar.Toggle style={{backgroundColor:'white'}} />
            <Navbar.Offcanvas   style={{backgroundColor:'#00000044'}} placement="end">
              <Offcanvas.Header  closeButton>
                <Offcanvas.Title style={{color:'white'}}>
                  name/profile
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

               <JustContainer><Animation><Nav.Link style={{color:'white',marginRight:"10px"}} href="/" >Home</Nav.Link> </Animation></JustContainer> 

                <JustContainer>
                  <Animation><Nav.Link style={{color:'white',marginRight:"10px"}} href="Signing" >Login</Nav.Link> </Animation>
                  <Nav.Link style={{color:'red'}}> / </Nav.Link>
                  <Animation><Nav.Link style={{color:'white',marginLeft:"10px"}} href="Signing" >Register</Nav.Link></Animation>
                </JustContainer>

                  
                 <DorpAnimation>
                 <NavDropdown  title={ <span style={{color:'white'}}>Categories</span>} >
                    <InsideDorpAnimation><NavDropdown.Item >Vapes</NavDropdown.Item></InsideDorpAnimation>
                    <InsideDorpAnimation><NavDropdown.Item >Liquid</NavDropdown.Item></InsideDorpAnimation> 
                    <InsideDorpAnimation><NavDropdown.Item >Accessories</NavDropdown.Item></InsideDorpAnimation> 
                  </NavDropdown>
                 </DorpAnimation>


                  <NavDropdown.Divider />
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button Color="primary" variant="outline-light">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>

  )
}

export default Navi