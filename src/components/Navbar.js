import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
  height: 60px;
box-shadow: 1px 2px 5px black;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 100;
`;
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    color: red;
  }
`;
const Logo = styled(Link)`
  ${NavLink}
  font-style:italic;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 770px) {
    display: block;
    cursor: pointer;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 0;
    right: 0;
    transform: translate(-50%, 45%);
  }
`;
const NavMenu = styled.div`
  margin-right: '-48px';
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const Navbar = ({view}) => {
  return (
    <Nav>
      <Logo to="/">mark</Logo>
      <MenuBars onClick={view}/>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primacy="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
