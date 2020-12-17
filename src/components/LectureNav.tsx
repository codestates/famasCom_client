import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import click from '../images/click.png'

const LectureNav = () => {
    return (
        <NavItems>
            <NavLink to="/Lecture">
                <NavItem>컴퓨터</NavItem>
            </NavLink>
            <NavLink to="/Lecture/Mobile">
                <NavItem>모바일</NavItem>
            </NavLink>
            <NavLink to="/Lecture/IDK">
                <NavItem>모르겠어요</NavItem>
            </NavLink>
        </NavItems>
    )   
}

const NavLink = styled(Link)`
    text-decoration: none;
`

    const NavItems = styled.div`
        display:flex;
        justify-content:flex-start;
        border-bottom:solid 2px; 
        max-width:90%;
    `
    const NavItem = styled.div`
        color:black;
        border-bottom: solid 5px white;
        font-size: 1.77rem;
        padding:10px 20px;
        &:hover{ 
            color:#01bf71;
            border-bottom:solid 5px #01bf71; 
            cursor: url(${click}), auto;
            transition: all 0.2s ease-in-out;
        }
    `


export default LectureNav