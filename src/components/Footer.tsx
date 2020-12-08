import React from 'react';
import { Link } from 'react-router-dom';
import Human from '../images/human.svg';
import styled from 'styled-components';

class Footer extends React.Component {
    render() {
        return (
            <Foot>
                <Cards>
                    <Card>
                        <img src={Human} alt="human"/>
                        <text>
                            <h2>이름1</h2>
                            <a>설명~~~~~~~~~~~~~~~</a>
                        </text>
                    </Card>
                    <Card>
                        <img src={Human} alt="human"/>
                        <text>
                            <h2>이름2</h2>
                            <a>설명~~~~~~~~~~~~~~~</a>
                        </text>
                    </Card>
                    <Card>
                        <img src={Human} alt="human"/>
                        <text>
                            <h2>이름3</h2>
                            <a>설명~~~~~~~~~~~~~~~</a>
                        </text>
                    </Card>
                    <Card>
                        <img src={Human} alt="human"/>
                        <text>
                            <h2>이름4</h2>
                            <a>설명~~~~~~~~~~~~~~~</a>
                        </text>
                    </Card>
                </Cards>
            </Foot>
        )
    }
}

const Foot = styled.div`
background-color: rgba(211,211,211,5)
`
const Cards = styled.ul`

`
const Card = styled.li`

`

export default Footer;