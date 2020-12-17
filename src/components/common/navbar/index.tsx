import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
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
  const handleLogout = () => {
    localStorage.removeItem("token");
  }
  return (
    <>
      <ContentNav scrollNav={scrollNav}>
        <ContentNavbarContainer>
          <ContentNavLogo scrollNav={scrollNav} to="/">
            fama's
        </ContentNavLogo>
          <ContentMobileIcon onClick={toggle}>
            <FaBars />
          </ContentMobileIcon>
          <ContentNavMenu>
            <ContentNavItem>
              <ContentNavLinks scrollNav={scrollNav} to="/">첫화면</ContentNavLinks>
            </ContentNavItem>
            <ContentNavItem>
              <ContentNavLinks scrollNav={scrollNav} to="/Lecture/Computer">컴퓨터</ContentNavLinks>
            </ContentNavItem>
            <ContentNavItem>
              <ContentNavLinks scrollNav={scrollNav} to="/Lecture/Mobile">모바일</ContentNavLinks>
            </ContentNavItem>
            <ContentNavItem>
              <ContentNavLinks scrollNav={scrollNav} to="/Lecture/IDK">모르겠어요</ContentNavLinks>
            </ContentNavItem>
            <ContentNavItem>
              <ContentNavLinks scrollNav={scrollNav} to="/Community">정보공유</ContentNavLinks>
            </ContentNavItem>
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
          </ContentNavMenu>
        </ContentNavbarContainer>
      </ContentNav>
    </>
  )
}
export default ContentNavbar