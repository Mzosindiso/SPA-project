import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

function Navbar() {
    return (
        <Nav>
            <LogoContainer>
                <Logo src={logo} alt="Logo" />
            </LogoContainer>
            <NavList>
                <NavItem>
                    <NavButton to="/">Home</NavButton>
                </NavItem>
                <NavItem>
                    <NavButton to="/about">About</NavButton>
                </NavItem>
                <NavItem>
                    <NavButton to="/userprofile">User Profile</NavButton>
                </NavItem>
            </NavList>
        </Nav>
    );
}

const Nav = styled.nav`
  background-color: #2c3e50;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  flex: 0 0 auto;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  flex: 1 1 auto;
`;

const NavItem = styled.li`
  display: inline;
  margin-left: 1rem;
`;

const NavButton = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  background-color: #34495e;

  &:hover {
    background-color: #3498db;
  }

  &:active {
    background-color: #2980b9;
  }
`;

export default Navbar;