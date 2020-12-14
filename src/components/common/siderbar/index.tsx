import React from 'react';
import {
  SiderContainer,
  CloseIcon,
  Icon,
  SiderbarWrapper,
  SiderLink,
  SiderBtnWrap,
  SiderbarRoute,
  SiderMenu
} from './SiderElement'

type siderprops = {
  toggle: () => void;
  isOpen: boolean;
}

const Siderbar = ({ toggle, isOpen }: siderprops) => {

  console.log(localStorage.getItem("token"))
  const handleLogout = () => {
    localStorage.removeItem("token");
  }

  return (
    <SiderContainer isOpen={isOpen} onClick={toggle} > 
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SiderbarWrapper>
      <SiderMenu>
        <SiderLink to="/">
          첫 화면
        </SiderLink>
        <SiderLink to="/ComExplain">
        컴퓨터
        </SiderLink>
        <SiderLink to="/MobExplain">
          모바일
        </SiderLink>
        <SiderLink to="/IDK">
        모르겠어요
        </SiderLink>
        <SiderLink to="/Community">
            정보공유
        </SiderLink>
          {localStorage.getItem("token") &&
            <SiderLink to="/ModifyInfo">
              내 정보
        </SiderLink>
          }
          {localStorage.getItem("token") &&
            <SiderBtnWrap>
              <SiderbarRoute to="/Login">접속 종료</SiderbarRoute>
            </SiderBtnWrap>
          }
          {!localStorage.getItem("token") &&
            <SiderBtnWrap>
              <SiderbarRoute to="/Login">회원으로 접속하기</SiderbarRoute>
            </SiderBtnWrap>
          }
        </SiderMenu>
        </SiderbarWrapper>
      </SiderContainer>
   
   )
 
 }

 export default Siderbar