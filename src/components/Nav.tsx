import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

class Nav extends React.Component {
    render() {
        return (
    <NavBody>
        <NavLogo><h2>LOGO</h2></NavLogo>
        <NavItems>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <NavItem title="눌러보세요!"><h2>첫화면</h2></NavItem>
            </Link>
            <Link to="/ComExplain" style={{ textDecoration: 'none' }}>
                <NavItem title="눌러보세요!"><h2>컴퓨터</h2></NavItem>
            </Link>
            <Link to="/MobExplain" style={{ textDecoration: 'none' }}>
                <NavItem title="눌러보세요!"><h2>모바일</h2></NavItem>
            </Link>
            <Link to="/IDK" style={{ textDecoration: 'none' }}>
                <NavItem title="눌러보세요!"><h2>모르겠어요</h2></NavItem>
            </Link>
            <Link to="/Community" style={{ textDecoration: 'none' }}>
                <NavItem title="눌러보세요!"><h2>정보공유</h2></NavItem>
            </Link>
            <Link to="/Login" style={{ textDecoration: 'none' }}>
                <NavItem title="눌러보세요!"><h2>로그인/회원가입</h2></NavItem>
            </Link>
        </NavItems>
    </NavBody>
        )
    }
}


const NavBody = styled.div`
    background; white;
    display:flex;
    justify-content:space-between;
`
const NavLogo = styled.div`
    padding:10px;
`
const NavItems = styled.div`
    display:flex;
    justify-content:space-between;
`
const NavItem = styled.div`
    color:black;
    padding:10px;
    border-bottom: solid 5px white;
    &:hover{ 
        color:#00796B;
        border-bottom:solid 5px #00796B; 
        cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABsUlEQVRYR+3XvWsUYRDH8c8ZCIIWQYhWQfGtsLSyU0sJNmojhJBY+BKwCBKwsBUbCwtBLULQyiamyR8gWoSQLsQmJJCAjaWFNhoNA3uwWTaXZ/cudymysLDsPjPzndnZ3zPb0OOj0eP4qgA8xGOsIq5/dAI+FeAKFnIB53CrmwAP8DYXcA0XugkQJX+TC7iO84cAhxU4CBW4lkF8rguTqgNlX8EXjGeBZ3APQziNRfxJgUoFeIKXOYcbOFMIEAChFf1YwlX8x0WEbvwuA0oFmM4yDId/8QsDBYehDedy96YQAhZ68R3XM5AdZqkAxVeQUt0t9OUWvsdY0XA/AYqxSuW7mwDzuNnLCszizoEFiGaJRhvGcWxiGR+ywaNOExaTbVmBF3ha0tohJp/wE/dTWr/FmpYA33CpzQB7mbcEOImJ7Bzcy1PN50lNeBQjmNyHiiQBNJM7gthgRmtmW2ZWCSAcdBriI+5W1YFOQjzD86oAzUq8xqM2Xkd8zpexUgegaRPDR+jFqYog/xDzxKt25oGm7THcxg2cxQl2/b2LASTU9B2+7gaduhtWTDp9ec8BtgFQflUhIQsz9wAAAABJRU5ErkJggg==), auto;
    }
`



export default Nav;