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

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo2} alt="logo" />
          <Container>
            <Row>
              <Col sm="12">
                <Nav className="justify-content-center">
                  <NavItem>
                    <Link to="/" className="nav-link">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/about" className="nav-link">About</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/gallery" className="nav-link">Gallery</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/blog" className="nav-link">Blog</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
          {/* <a
            className="App-link"
            href="https://freewebsitetemplates.com/preview/mustacheenthusiast/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
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
                <Col xs="12" sm="12">
                  <hr/>
                </Col>
                <Col xs="12" sm="8">
                  <p>&copy; 2021 by <strong>André</strong>. All rights reserved.</p>
                </Col>
                <Col xs="12" sm="4">
                  <p>
                    <span>Social</span>
                    <span>Social</span>
                    <span>Social</span>
                    <span>Social</span>
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
