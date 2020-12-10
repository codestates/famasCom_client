import React from "react";
import styled from 'styled-components';

type DeleteModalProps = {
	msgid: string;
	deleteModalState: boolean;
	onDeletelick: () => void;
	handleMsgDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
};


export default function DeleteModal({ deleteModalState, onDeletelick, handleMsgDelete, msgid }: DeleteModalProps) {

	if (deleteModalState) {
		return (
			<Modal>
				<div id="myModal" className="authModal">
					<div className="modal-content">
						<span className="close" onClick={onDeletelick}>&times;</span>
						<p>삭제하시겠습니까?</p>
						<button id={msgid} onClick={handleMsgDelete}>예</button>
						<button onClick={onDeletelick}>아니오</button>
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
	background-color: rgba(0, 0, 0, 0.01); /* Black w/ opacity */
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
