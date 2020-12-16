import React from 'react';
import {FaBars} from 'react-icons/fa'
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
  
  console.log(localStorage.getItem("token"))
  const handleLogout = () => {
    localStorage.removeItem("token");
  }
  
  return (
    <>
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
            {localStorage.getItem("token") &&
              <NavItem>
                <NavLinks to="/ModifyInfo">내 정보</NavLinks>
              </NavItem>
            }
          </NavMenu>
          {localStorage.getItem("token") &&
            <NavBtn>
              <NavBtnLink to="/Login" onClick={handleLogout} >접속 종료</NavBtnLink>
            </NavBtn>
          }
          {!localStorage.getItem("token") &&
            <NavBtn>
              <NavBtnLink to="/Login" >회원으로 접속하기</NavBtnLink>
            </NavBtn>
          }
      </NavbarContainer>
    </Nav>
  </>
   )
 
 }

 export default Navbar