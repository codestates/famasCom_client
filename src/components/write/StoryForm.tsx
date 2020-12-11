import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import Reply from './Reply'
// 댓글 폼을 나타내는 컴포넌트
type StoryFormProps = {
  datas: any;
  editorHtml: string;
  editState: boolean;
  rechatValue: string;
  deleteModalState: boolean;
  onDeletelick: () => void;
  onEditclick: () => void;
  handleMsgDelete: (e: React.MouseEvent<HTMLButtonElement>)=> void;
  handleRechatChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
  handleUdateClick: (e: React.FormEvent<HTMLInputElement>)=> void;
  handleStoryChange: (html: any) => void;
  handleSubmitClick: (e: React.MouseEvent<HTMLButtonElement>)=> void;
  handleReChatClick: (e: React.FormEvent<HTMLInputElement>)=> void;
};

const StoryForm = ({rechatValue, editState, deleteModalState, onDeletelick, onEditclick, handleMsgDelete, handleRechatChange,
  handleUdateClick, datas, editorHtml, handleStoryChange, handleSubmitClick, handleReChatClick}: StoryFormProps) => {

  console.log("🚀 ~ file: StoryForm.js ~ line 12 ~ StoryForm ~ datas", datas)
  
  return (
    <React.Fragment>
      <EditorBlock>
        <QuillWrapper>
          <ReactQuill theme="snow" value={editorHtml} onChange={handleStoryChange} />
        </QuillWrapper>
        <StyleButton onClick={handleSubmitClick}>등록</StyleButton>
      </EditorBlock>
      <Line><br></br></Line>
      <Reply datas={datas}
        handleMsgDelete={handleMsgDelete} deleteModalState={deleteModalState} onDeletelick={onDeletelick}
        editState={editState} handleUdateClick={handleUdateClick} onEditclick={onEditclick} rechatValue={rechatValue}
        handleRechatChange={handleRechatChange} handleReChatClick={handleReChatClick}/>
    </React.Fragment>
    )
}

export default StoryForm;

const EditorBlock = styled(Responsive)`
padding-top: 1rem;
`;

const QuillWrapper = styled.div`

.ql-container {
  min-height: 50px;
  border-radius: 10px;
  padding: 0;
  font-size: 1.125rem;
  line-height: 1.5;
}
.ql-container .ql-blank ::before {
  left 0px
}
`;
const StyleButton = styled.button`
border: none;
cursor: pointer;
outline: none;
margin: 0.6rem 0 0;
padding-top: 0.75rem;
padding-bottom: 0.75rem;
width: 8rem;
height: 2.75rem;
border-radius: 4px;
font-size: 1.125rem;
font-weight: bold;
font-family: '맑은 고딕'
color: black;
background: #6EB584;
display: inline-block;
float: right;
text-align: center;
line-height: 22px;
&:hover {
  color:blue;
  border: 2px solid blue;
}
`;

const Line = styled.div`
dispaly: block;
width: 1022px;
height: 10px;
`;
