import React from 'react';
import Nav from '../components/Nav'
import Wrapper from '../themes/Wrapper'

class NotFound extends React.Component {
    render() {
        return (
            <Wrapper>
            <Nav/>
            <div>404 ERR! 주소를 확인해보세요!</div>
        </Wrapper>
        )
    }
}

export default NotFound;