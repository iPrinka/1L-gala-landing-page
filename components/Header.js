import React from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Image from 'next/image';

const Header = () => {

  return (
    <div style={{backgroundColor: '#100a0e'}}>
      <Navbar light expand="md">
        <Container>
            <Nav className="m-auto" navbar>
                <NavLink href="https://www.facebook.com/oneleagueorg">
                    <img src='https://fastly-cdn-shopvida.global.ssl.fastly.net/OneLeague/Icons/facebook-logo.png?auto=webp' style={{'width': '1.5rem'}}/>
                </NavLink>
                <NavLink href="https://www.linkedin.com/school/oneleagueorg/">
                    <img src='https://fastly-cdn-shopvida.global.ssl.fastly.net/OneLeague/Icons/linkedin-logo.png?auto=webp' style={{'width': '1.5rem'}}/>
                </NavLink>
                <NavLink href="https://www.instagram.com/oneleagueorg/">
                  <img src='https://fastly-cdn-shopvida.global.ssl.fastly.net/OneLeague/Icons/Instagram-Icon.png?auto=webp' style={{'width': '1.5rem'}}/>
                </NavLink>
            </Nav>
            <NavbarBrand href="/">
              <div className={'image-container'}>
                <Image src="/logo.png" alt="ONE LEAGUE" layout="fill" className={'image'}/>
              </div>
            </NavbarBrand>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="https://medium.com/@one_league" style={{color: 'white', fontFamily: 'Kumbh Sans', fontSize:'15px'}}>Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://one-league.org/" style={{color: 'white', fontFamily: 'Kumbh Sans', fontSize:'15px'}}>Website</NavLink>
              </NavItem>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;