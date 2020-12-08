import React from "react";
import { Link } from "react-router-dom";
import man from "../images/man.png";
import woman from "../images/woman.png";
import oldMan from "../images/old-man.png";
import styled from "styled-components";

export default function BTNSection() {
  return (
    <BtnSection>
        <Btns>
            <IconBtn>
                <Icon>
                    <img className="man-icon" src={man} height="170px" width="150px" alt="man"></img>
                    <a>60대 김ㅇㅇ씨</a>
                </Icon>
                <Link className="explain-list-link" to="/ComExplain"><Button>컴퓨터 사용이 어려워요!</Button></Link>
            </IconBtn>
            <IconBtn>
                <Icon>
                    <img className="woman-icon" src={woman} height="160px" width="143px" alt="woman"></img>
                    <a>50대 박ㅇㅇ씨</a>
                    </Icon>
                <Link className="explain-list-link" to="/MobExplain"><Button>스마트폰 사용이 어려워요!</Button></Link>
            </IconBtn>
            <IconBtn>
                <Icon>
                    <img className="oldMan-icon" src={oldMan} height="170px" width="150px" alt="old-man"></img>
                    <a>70대 이ㅇㅇ씨</a>
                </Icon>
                <Link className="explain-list-link" to="/IDK"><Button>하나도 모르겠어요!</Button></Link>
            </IconBtn>
        </Btns>
    </BtnSection>
  );
}

const BtnSection = styled.div`
display: flex;
justify-content: space-around;
`
const Btns = styled.ul`

`
const IconBtn = styled.li`

`

const Icon = styled.div`

`

const Button = styled.button`
border-radius: 50px;
padding: 10px;
min-width: 120px;
color: white;
font-weight: 600px;
-webkit-appearance: none;
cursor: pointer;
&:active,
&:focus {
    outline: none;
}
`
