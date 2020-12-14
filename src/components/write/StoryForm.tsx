import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Reply from './Reply'
import Responsive from '../common/Responsive';
import styled from 'styled-components';
const EditorBlock = styled(Responsive)`
padding: 15px;
outline:#6eb584;
;`;
import { EntiryWrapper, QuillWrapper, StyleButton, Line } from "./style/StoryFormstyle.js"
import { Comment } from 'antd';

// 댓글 폼을 나타내는 컴포넌트

type StoryFormProps = {
  datas: any;
  editorHtml: string;
  msgEditorHtml: string;
  editState: boolean;
  rechatValue: string;
  commentValue: string;
  deleteModalState: boolean;
  onDeletelick: () => void;
  onEditclick: () => void;
  handleEditStoryChange: (html: any) => void;
  onHandleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleLike: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleMsgDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleRechatChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateClick: (e: React.FormEvent<HTMLInputElement>) => void;
  handleStoryChange: (html: any) => void;
  handleSubmitClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onsubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleReChatClick: (e: React.FormEvent<HTMLInputElement>) => void;
};

const StoryForm = ({ rechatValue, editState, deleteModalState, onDeletelick, onEditclick, handleMsgDelete, handleRechatChange,
  handleUpdateClick, datas, editorHtml, handleStoryChange, handleSubmitClick, handleReChatClick, handleLike, onHandleChange, commentValue, onsubmit, handleEditStoryChange, msgEditorHtml }: StoryFormProps) => {

  return (
    <EntiryWrapper>
      <EditorBlock>
        <QuillWrapper>
          <ReactQuill theme="snow" value={editorHtml} onChange={handleStoryChange} placeholder={"남기실 글을 입력하세요."} />
        </QuillWrapper>
        <StyleButton onClick={handleSubmitClick}>등록</StyleButton>
      </EditorBlock>
      <Line></Line>


      {/* 메세지를 하나씩!! 뿌려줌 */}
      {!datas ? '' : datas.sort((one: any, two: any) => (one.createdAt > two.createdAt ? -1 : 1)).map((item: any) => (
        <React.Fragment>
          <Reply datas={item}
            msgEditorHtml={msgEditorHtml}
            onsubmit={onsubmit}
            onHandleChange={onHandleChange}
            handleLike={handleLike}
            handleEditStoryChange={handleEditStoryChange}
            handleMsgDelete={handleMsgDelete}
            deleteModalState={deleteModalState}
            onDeletelick={onDeletelick}
            editState={editState}
            handleUpdateClick={handleUpdateClick}
            onEditclick={onEditclick}
            commentValue={commentValue}
            rechatValue={rechatValue}
            handleRechatChange={handleRechatChange}
            handleReChatClick={handleReChatClick} />
        </React.Fragment>)
      )}
    </EntiryWrapper>
  )
}


export default StoryForm;