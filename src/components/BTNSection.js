import React from "react";
import {Link} from "react-router-dom";
import man from "../images/man.png";
import woman from "../images/woman.png";
import oldMan from "../images/old-man.png";

export default function BTNSection() {
  return (
    <div className="BTN-section">
        <ul>
            <li className="icon-BTN-container">
                    <img className="man-icon" src={man} height="170px" width="150px" alt="man"></img>
                    <a>60대 김ㅇㅇ씨</a>
                <Link className="explain-list-link" to="/ComExplain"><span>컴퓨터 사용이 어려워요!</span></Link>
            </li>
            <li className="icon-BTN-container">

                    <img className="woman-icon" src={woman} height="160px" width="143px" alt="woman"></img>
                    <a>50대 박ㅇㅇ씨</a>
                <Link className="explain-list-link" to="/MobExplain"><span>스마트폰 사용이 어려워요!</span></Link>
            </li>
            <li className="icon-BTN-container">

                    <img className="oldMan-icon" src={oldMan} height="170px" width="150px" alt="old-man"></img>
                    <a>70대 이ㅇㅇ씨</a>
                <Link className="explain-list-link" to="/IDK"><span>하나도 모르겠어요!</span></Link>
            </li>
        </ul>
    </div>
  );
}
