import React from "react";
import styled from 'styled-components';

type Secession = {
	secessionState: boolean;
	onSecessionlick: () => void;
	infoModifyHandler: (e: any) => void;
}

export default function Secession({secessionState, onSecessionlick, infoModifyHandler}: Secession) {

  if (secessionState) {
    return (
      <Modal>
      <div id="myModal" className="authModal">
        <div className="modal-content">
          <span className="close" onClick={onSecessionlick}>&times;</span>
          <p>탈퇴하시겠습니까?</p>
						<button className="secession_btn" onClick={infoModifyHandler}>예</button>
						<button onClick={onSecessionlick}>아니오</button>
        </div>
        </div>
        </Modal>
    )
  } else {
    return null
  }
} 
 
const Modal = styled.div`
/* The Modal (background) */
.authModal {
	display: block; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	padding-top: 100px; /* Location of the box */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.08); /* Black w/ opacity */
}

.tit-sign {
	width: 150px;
	text-align: center;
	font-size: 25px;
	margin: 10px 50px 10px 125px;
	font-family: 'Nanum Myeongjo', sans-serif;
	border-bottom: 2px solid rgba(0, 0, 0, 0.4);
}
/* Modal Content */
.modal-content {
	background-color: #fefefe;
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	width: 25%;
	text-align: center;
	font-size: 25px;
}

/* The Close Button */
.close {
	color: #aaaaaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
}

.close:hover,
.close:focus {
	color: #000;
	text-decoration: none;
	cursor: pointer;
}
`;
