import styled from 'styled-components';


export const Modal = styled.div`
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

export const DeleteBtn = styled.div`
border-radius: 5px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 1.3rem;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #1c2237;
  color: #fff;
}
`
export const DeleteBtnWrapper = styled.div` 
display: flex;
flex-direction: row;
justify-content: center;
margin-left: 25%;
`