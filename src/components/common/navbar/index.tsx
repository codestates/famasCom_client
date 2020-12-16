import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElement'
//
type navprop = {
  toggle: () => void;
}

const Navbar = ({ toggle }: navprop) => {
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
  const handleLogout = () => {
    localStorage.removeItem("token");
  }
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
    <Nav scrollNav={scrollNav}>
      <NavbarContainer> 
        <NavLogo  scrollNav={scrollNav} to="/">
          fama's
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavItem>
            <NavLinks scrollNav={scrollNav} to="/">첫화면</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks scrollNav={scrollNav} to="/ComExplain">컴퓨터</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks scrollNav={scrollNav} to="/MobExplain">모바일</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks scrollNav={scrollNav} to="/IDK">모르겠어요</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks scrollNav={scrollNav} to="/Community">정보공유</NavLinks>
            </NavItem>
            {localStorage.getItem("token") &&
              <NavItem>
                <NavLinks scrollNav={scrollNav} to="/ModifyInfo">내 정보</NavLinks>
              </NavItem>
              }
              
              {localStorage.getItem("token") &&
            <NavBtn>
              <NavBtnLink scrollNav={scrollNav} to="Login" onClick={handleLogout} >접속 종료</NavBtnLink>
            </NavBtn>
          }
          {!localStorage.getItem("token") &&
            <NavBtn>
              <NavBtnLink scrollNav={scrollNav} to="Login" >회원으로 접속하기</NavBtnLink>
            </NavBtn>
          }
          </NavMenu>
          
      </NavbarContainer>
        </Nav>
        </IconContext.Provider>
  </>
   )
 
 }

 export default Navbar