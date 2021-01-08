import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const routes = ['about', 'news', 'platform', 'career'];

function AppNavbar() {
  const router = useRouter();

  return (
    <NavBar>
      <NavTitle>
        <Link href="/">
          <a>home</a>
        </Link>
      </NavTitle>
      <NavList>
        {routes.map((route) => (
          <NavItem key={route}>
            <Link href={`/${route}`}>
              <a className={`${router.pathname.includes(route) && 'active'}`}>{route}</a>
            </Link>
          </NavItem>
        ))}
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
  justify-content:space-around;
`;
const NavItem = styled.li`
  margin:0 5px;
  cursor: pointer;
  a{
    display:flex;
    padding:25px;
    color:#ccc;
    font-weight:bold;
  }
  a.active{
    color:white;
  }
  a:hover{
    color:white;
  }
`;

export default AppNavbar;
