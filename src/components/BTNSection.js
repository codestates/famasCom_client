import React from "react";
import { Link } from "react-router-dom";
import man from "../images/man.png";
import woman from "../images/woman.png";
import oldMan from "../images/old-man.png";
import styled from "styled-components";
export default function BTNSection() {
  return (
    <Btns>
            <IconBtn>
                <Icon>
                    <img className="man-icon" src={man} height="170px" width="150px" alt="man"></img>
                    <p>60대 김ㅇㅇ씨</p>
                </Icon>
                <Link className="explain-list-link" to="/ComExplain">
                    <Button change>컴퓨터 사용이 어려워요!</Button>
                </Link>
            </IconBtn>
            <IconBtn>
                <Icon>
                    <img className="woman-icon" src={woman} height="160px" width="143px" alt="woman"></img>
                    <p>50대 박ㅇㅇ씨</p>
                </Icon>
                <Link className="explain-list-link" to="/MobExplain">
                    <Button change>스마트폰 사용이 어려워요!</Button>
                </Link>
            </IconBtn>
            <IconBtn>
                <Icon>
                    <img className="oldMan-icon" src={oldMan} height="170px" width="150px" alt="old-man"></img>
                    <p>70대 이ㅇㅇ씨</p>
                </Icon>
                <Link className="explain-list-link" to="/IDK">
                    <Button change>하나도 모르겠어요!</Button>
                </Link>
            </IconBtn>
    </Btns>
  );
}
const Btns = styled.div`
`
const IconBtn = styled.div`
    display:flex;
    justify-content:space-around;
`
const Icon = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Button = styled.button`
    height: 170px;
    width: 600px;
    font-size: 50px;
    font-weight: 600px;
    padding: 10px;
    color:#00796B;
    min-width: 120px;
    border-radius: 50px;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
        outline: none;
    },
    &:hover {
        .box-shadow: 200px 0 0 0 rgba(0,0,0,0.25) inset, 
                    -200px 0 0 0 rgba(0,0,0,0.25) inset;
    }
`;