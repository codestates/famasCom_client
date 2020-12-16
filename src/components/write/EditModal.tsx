import React, { useState } from "react";
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

type EditFormProps = {
  handleEditStoryChange: (html: any) => void;
  editState: boolean;
  onEditclick: () => void;
  handleUpdateClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  msgEditorHtml: string;
  msgid: string;
};

export default function EditModal({ editState, onEditclick, handleUpdateClick, handleEditStoryChange, msgEditorHtml, msgid }: EditFormProps) {

  if (editState) {
    return (
      <Modal>
        <div id="myModal" className="authModal">
          <div className="modal-content">
            <QuillWrapper>
              <ReactQuill theme="snow" value={msgEditorHtml} onChange={handleEditStoryChange} />
            </QuillWrapper>
            <Btn id={msgid} className="edit_btn"
              onClick={handleUpdateClick}>수정</Btn>
            &nbsp;&nbsp;
            <Btn className="edit_btn" onClick={onEditclick}>
              취소
            </Btn>
          </div>
        </div>
      </Modal>
    )
  } else {
    return null
  }
}

const QuillWrapper = styled.div`
.ql-toolbar {
  background: #eaecec;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
}
.ql-container {
  min-height: 150px;
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  padding: 10px;
  font-size: 1.125rem;
  line-height: 1.5;
}
.ql-container .ql-blank ::before {
  left : 0px
}
`;

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
/* Modal Content */
.modal-content {
	background-color: #fefefe;
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
  width: 50%;
  height: 300px;
	text-align: center;
  font-size: 25px;
  color: black;
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
.edit_btn {
  position: relative;
  display: inline-flex;
  margin-bottom: 1.5rem;
  margin-top: 0.8rem;
}
`;

const Btn = styled.div`
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