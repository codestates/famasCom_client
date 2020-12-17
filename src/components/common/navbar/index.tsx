<<<<<<< HEAD
import React from 'react';
import { FaBars } from 'react-icons/fa'
=======
import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
>>>>>>> 4569328c38a0333da61ebb8804a1ea3408fdbc7f
import {
  ContentNav,
  ContentNavbarContainer,
  ContentNavLogo,
  ContentMobileIcon,
  ContentNavMenu,
  ContentNavItem,
  ContentNavLinks,
  ContentNavBtn,
  ContentNavBtnLink
} from './NavbarElement'
//
type navprop = {
  toggle: () => void;
}

<<<<<<< HEAD
const Navbar = ({ toggle }: navprop) => {

=======
const ContentNavbar = ({ toggle }: navprop) => {
  const [scrollNav, setScrollNav] = useState<boolean>(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  console.log(localStorage.getItem("token"))
>>>>>>> 4569328c38a0333da61ebb8804a1ea3408fdbc7f
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("kakao_token");
  }

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            fama's
        </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">첫화면</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Lecture">강의</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Game">게임</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Community">정보공유</NavLinks>
            </NavItem>
=======
      <IconContext.Provider value={{ color: '#fff' }}>
=======
      
>>>>>>> e2c2b62ab6ed9adfdfd29633f0cb15b523770ebe
    <ContentNav scrollNav={scrollNav}>
      <ContentNavbarContainer> 
        <ContentNavLogo  scrollNav={scrollNav} to="/">
          fama's
        </ContentNavLogo>
        <ContentMobileIcon  onClick={toggle}>
          <FaBars />
        </ContentMobileIcon>
        <ContentNavMenu>
            <ContentNavItem>
            <ContentNavLinks scrollNav={scrollNav} to="/">첫화면</ContentNavLinks>
            </ContentNavItem>
            <ContentNavItem>
            <ContentNavLinks scrollNav={scrollNav} to="/Lecture">강의</ContentNavLinks>
            </ContentNavItem>
            <ContentNavItem>
            <ContentNavLinks scrollNav={scrollNav} to="/Game">게임</ContentNavLinks>
            </ContentNavItem>
            <ContentNavItem>
            <ContentNavLinks scrollNav={scrollNav} to="/Community">정보공유</ContentNavLinks>
            </ContentNavItem>
>>>>>>> 4569328c38a0333da61ebb8804a1ea3408fdbc7f
            {localStorage.getItem("token") &&
              <ContentNavItem>
                <ContentNavLinks scrollNav={scrollNav} to="/ModifyInfo">내 정보</ContentNavLinks>
              </ContentNavItem>
              }
              
              {localStorage.getItem("token") &&
            <ContentNavBtn>
              <ContentNavBtnLink scrollNav={scrollNav} to="/Login" onClick={handleLogout} >접속 종료</ContentNavBtnLink>
            </ContentNavBtn>
          }
          {!localStorage.getItem("token") &&
            <ContentNavBtn>
              <ContentNavBtnLink scrollNav={scrollNav} to="/Login" >회원으로 접속하기</ContentNavBtnLink>
            </ContentNavBtn>
          }
<<<<<<< HEAD
        </NavbarContainer>
      </Nav>
    </>
  )

}

export default Navbar
=======
          </ContentNavMenu>
          
      </ContentNavbarContainer>
        </ContentNav>

  </>
   )
 
 }

 export default ContentNavbar
>>>>>>> 4569328c38a0333da61ebb8804a1ea3408fdbc7f
