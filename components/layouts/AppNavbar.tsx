import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

function AppNavbar() {
  return (
    <NavBar>
      <NavTitle>
        <Link href="/">
          <a>home</a>
        </Link>
      </NavTitle>
      <NavList>
        <NavItem>
          <Link href="/about">
            <a>about</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/news">
            <a>news</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/platform">
            <a>platform</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/career">
            <a>career</a>
          </Link>
        </NavItem>
      </NavList>
    </NavBar>
  );
}

const NavBar = styled.nav`
  height:80px;
  background-color:black;
  color:white;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 15px;
  text-transform:uppercase;
`;
const NavTitle = styled.header`
  font-size:32px;
  color:red;
`;
const NavList = styled.ul`
  display:flex;
`;
const NavItem = styled.li`
  margin:0 5px;
  cursor: pointer;
  a{
    display:block;
    padding:20px;
  }
  :hover{
    opacity:0.8;
  }
`;

export default AppNavbar;
