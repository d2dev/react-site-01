import React from 'react';
import logo2 from './assets/logo.jpg';
import './App.css';

import { Nav, NavItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import Home from "./containers/Home";
import Blog from "./containers/Blog";
import Contact from "./containers/Contact";
import Gallery from "./containers/Gallery";
import About from "./containers/About";
import Error from "./containers/Error";

import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaInstagram, FaRegEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo2} className="App-logo" alt="logo" />
          <Container>
            <Row>
              <Col sm="12">
                <Nav id="menu" className="justify-content-center">
                  <NavItem>
                    <NavLink to="/" className="nav-link" activeStyle={{color:'#0ba39c'}}>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/about" className="nav-link" activeStyle={{color:'#0ba39c'}}>About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/gallery" className="nav-link" activeStyle={{color:'#0ba39c'}}>Gallery</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/blog" className="nav-link" activeStyle={{color:'#0ba39c'}}>Blog</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/contact" className="nav-link" activeStyle={{color:'#0ba39c'}}>Contact</NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </header>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Contact" exact component={Contact}></Route>
          <Route path="/Gallery" exact component={Gallery}></Route>
          <Route path="/Blog" exact component={Blog}></Route>
          <Route path="/About" exact component={About}></Route>
          <Route component={Error}></Route>
        </Switch>
        <footer>
          <Container>
              <Row>
                <Col xs="12" md="7">
                  <p className="text-md-left">&copy; 2020 by <strong>André</strong>. All rights reserved.</p>
                </Col>
                <Col xs="12" md="5">
                  <p className="text-md-right">
                    <span className='footer-span'><FaFacebookF size={30} className='footer-icon'/></span>
                    <span className='footer-span'><FaTwitter size={30} className='footer-icon'/></span>
                    <span className='footer-span'><FaInstagram size={30} className='footer-icon'/></span>
                    <span className='footer-span'><FaRegEnvelope size={30} className='footer-icon'/></span>
                  </p>
                </Col>
            </Row>
          </Container>
        </footer>
      </Router>
    </div>
  );
}

export default App;
