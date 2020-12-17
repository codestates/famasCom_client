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
const ExplainBlock = styled(Responsive)`
padding: 15px;
outline:#6eb584;
;`;

import { EntiryWrapper, QuillWrapper, StyleButton, Line, GoToLoginBtn, ExplainText } from "./style/StoryFormstyle.js"

// 댓글 폼을 나타내는 컴포넌트

type StoryFormProps = {
  datas: any;
  onReset: () => void;
  reRending: () => void;
  editorHtml: string;
  commentValue: string;
  onHandleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleLike: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleStoryChange: (html: any) => void;
  handleSubmitClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onsubmit: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const StoryForm = ({
  datas, editorHtml, handleStoryChange,
  handleSubmitClick, handleLike, onHandleChange,
  commentValue, onsubmit, reRending, onReset }: StoryFormProps) => {


  return (
    <EntiryWrapper>
      {localStorage.getItem("token") &&
        <EditorBlock>
          <QuillWrapper>
            <ReactQuill theme="snow" value={editorHtml} onChange={handleStoryChange} placeholder={"남기실 글을 입력하세요."} />
          </QuillWrapper>
          <StyleButton onClick={handleSubmitClick}>등록</StyleButton>
        </EditorBlock>
      }
      {!localStorage.getItem("token") &&
        <ExplainBlock>
          <ExplainText>이 곳에 글을 남기면 정보도 얻을수 있구, 회고도 할 수 있는데 <span>👉🏻👈🏻 </span> </ExplainText>
          <ExplainText>말로 다 설명할 수가 없네요.. <span>😔</span></ExplainText>
          <ExplainText>로그인 하면 이용 가능한데, 로그인 하시겠어요? &nbsp;&nbsp;
          <GoToLoginBtn to="/Login">회원으로 접속하기</GoToLoginBtn>
          </ExplainText>
        </ExplainBlock>
      }
      <Line></Line>


      {/* 메세지를 하나씩!! 뿌려줌 */}
      {!datas ? <div>
        데이터를 가져오고있습니다.
      </div> : datas.sort((one: any, two: any) =>
        (one.createdAt > two.createdAt ? -1 : 1)).map((item: any) => (
          <React.Fragment>
            <Reply
              key={item.msgId}
              datas={item}
              onReset={onReset}
              reRending={reRending}
              onsubmit={onsubmit}
              onHandleChange={onHandleChange}
              handleLike={handleLike}
              commentValue={commentValue}
            />
          </React.Fragment>)
        )}
    </EntiryWrapper>
  )
}


export default StoryForm;