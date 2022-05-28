import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import {withAuth0} from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </NavItem>
        {
          this.props.auth0.isAuthenticated ? (
          <>
          <NavItem>
            <Link to="/profile" className="nav-link">Profile</Link>
          </NavItem>
          <NavItem>
            <LogoutButton/>
          </NavItem>
          </>): <NavItem><LoginButton/></NavItem>
        }
        
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
