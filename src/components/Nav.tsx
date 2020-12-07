import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import logo from "../images/FamasCOM.png";


class Nav extends React.Component {
    render() {
        return (
            <Navbar>
                <NavContainer>
                    <Logo>
                        <NavLink to='/'>
                            <img src={logo} className="nav-logo" alt="Logo" height="100px" width="120px"/>
                            <a>FAMAS COM</a>
                        </NavLink>
                    </Logo>
                    <ItemList>
                        <Item>
                            <Link to="/">첫 화면</Link>
                        </Item>
                        <Item>
                            <Link to="/ComExplain">컴퓨터</Link>
                        </Item>
                        <Item>
                            <Link to="/MobExplain">스마트폰</Link>
                        </Item>
                        <Item>
                            <Link to="/Community">정보공유 게시판</Link>
                        </Item>
                        <Item>
                            <Link to="/Login">로그인/회원가입</Link>
                        </Item>
                    </ItemList>
                </NavContainer>
            </Navbar>
        );
    }
}

const Navbar = styled.nav`
    width: 100%;
    height: 6rem;
    outline-style: solid;
    outline-width: 1px;
`
  
const NavContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 8rem;
    padding-right: 8rem;
  `
  
  
const Logo = styled.div`
    position: relative;
    font-family: 'Black Han Sans';
    font-size: 1.1rem;
  `
  
const ItemList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
`
  
const Item = styled.li`
    margin-left: 3.5rem;
    font-weight: 600;
    font-size: 30px
`

export default Nav;