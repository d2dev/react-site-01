import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

import { Link } from "react-router-dom";

class NavMenu extends React.Component {

    constructor (props){
        super(props);
        this.state = {isOpen: false};
        this.toggleIsOpen = this.toggleIsOpen.bind(this);
    }

    toggleIsOpen() {
        this.setState({isOpen: !this.state.isOpen});
    }

  render(){
    return (
        <div>
        <Navbar color="light" light expand="md">
            <NavbarToggler onClick={this.toggleIsOpen} className="mx-auto" />
            <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mx-auto">
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
            {/* <Nav className="mr-auto" navbar>
                <NavItem>
                <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Option 1
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav> */}
            </Collapse>
        </Navbar>
        </div>
    );
}
}

export default NavMenu;