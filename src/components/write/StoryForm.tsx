import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Reply from './Reply'
import Responsive from '../common/Responsive';
import styled from 'styled-components';
const EditorBlock = styled(Responsive)`padding: 10px;`;
import { EntiryWrapper, QuillWrapper, StyleButton, Line } from "./style/StoryFormstyle.js"
import { Comment } from 'antd';

// 댓글 폼을 나타내는 컴포넌트

type StoryFormProps = {
  datas: any;
  editorHtml: string;
  editState: boolean;
  rechatValue: string;
  commentValue: string;
  deleteModalState: boolean;
  onDeletelick: () => void;
  onEditclick: () => void;
  onHandleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleLike: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleMsgDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleRechatChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUdateClick: (e: React.FormEvent<HTMLInputElement>) => void;
  handleStoryChange: (html: any) => void;
  handleSubmitClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onsubmit: (e: any) => void;
  handleReChatClick: (e: React.FormEvent<HTMLInputElement>) => void;
};

const StoryForm = ({ rechatValue, editState, deleteModalState, onDeletelick, onEditclick, handleMsgDelete, handleRechatChange,
  handleUdateClick, datas, editorHtml, handleStoryChange, handleSubmitClick, handleReChatClick, handleLike, onHandleChange, commentValue, onsubmit }: StoryFormProps) => {

  return (
    <EntiryWrapper>
      <EditorBlock>
        <QuillWrapper>
          <ReactQuill theme="snow" value={editorHtml} onChange={handleStoryChange} />
        </QuillWrapper>
        <StyleButton onClick={handleSubmitClick}>등록</StyleButton>
      </EditorBlock>

      <Line><br></br></Line>


      <p>댓글</p>{/* 메세지를 하나씩!! 뿌려줌 */}
      {!datas ? '' : datas.map((item: any) => (
        <>
          <Reply datas={item}
            onsubmit={onsubmit}
            onHandleChange={onHandleChange}
            handleLike={handleLike}
            handleMsgDelete={handleMsgDelete}
            deleteModalState={deleteModalState}
            onDeletelick={onDeletelick}
            editState={editState}
            handleUdateClick={handleUdateClick}
            onEditclick={onEditclick}
            commentValue={commentValue}
            rechatValue={rechatValue}
            handleRechatChange={handleRechatChange}
            handleReChatClick={handleReChatClick} />
        </>)
      )}
    </EntiryWrapper>
  )
}


export default StoryForm;