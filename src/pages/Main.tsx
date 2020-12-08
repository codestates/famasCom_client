import React from 'react';
import Wrapper from '../themes/Wrapper'
import Nav from '../components/Nav'

class Main extends React.Component {
    render() {
        return (
            <Wrapper>
                <Nav/>
                <h1>////메인페이지</h1>
            </Wrapper>
        )
    }
}

export default Main;