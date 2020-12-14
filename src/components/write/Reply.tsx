import React, { useState } from 'react';
import { CommentSwappar, FormWapper } from "./style/ReplyStyle"
import moment from 'moment';
import 'antd/dist/antd.css';
import Avatar from '@material-ui/core/Avatar';
import { Comment, Tooltip, Button, Form, List, Input } from 'antd'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import { type } from 'os';
import { StyleButton } from "./style/StoryFormstyle.js"
import AddLike from './AddLike';

type StoryFormProps = {
  datas: any;
  msgEditorHtml: string;
  editState: boolean;
  rechatValue: string;
  commentValue: string;
  deleteModalState: boolean;
  onDeletelick: () => void;
  onEditclick: () => void;
  handleEditStoryChange: (html: any) => void;
  handleLike: (e: React.MouseEvent<HTMLInputElement>) => void;
  onHandleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleMsgDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleRechatChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateClick: (e: React.FormEvent<HTMLInputElement>) => void;
  handleReChatClick: (e: React.FormEvent<HTMLInputElement>) => void;
  onsubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const { TextArea } = Input

const Reply = ({ datas,
  deleteModalState, onDeletelick, handleMsgDelete, handleEditStoryChange,
  handleUpdateClick, editState, onEditclick, handleLike, onHandleChange, commentValue,
  onsubmit, msgEditorHtml }: StoryFormProps) => {

  //console.log("🚀 ~ file: Reply.tsx ~ line 44 ~ datas", datas)
  const time = moment(datas.createdAt, "YYYYMMDD")

  //대댓글 랜더 관련 훅 
  const [commentOpen, setCommentOpen] = useState<boolean>(false);
  //대댓글 랜더 관련 토글
  const handleCommentOpen = () => {
    setCommentOpen(!commentOpen);
  }

  //대댓글 관련 훅
  const [replyOpen, setReplyOpen] = useState<boolean>(false);

  //대댓글 관련 토글 
  const handleReplyOpen = () => {
    setReplyOpen(!replyOpen);
  }
  //좋아요 관련 

  //comment Actions
  const actions: any = [
    <span id={datas.msgId} onClick={handleLike} className="iLike"
      style={{ cursor: 'pointer' }}> 좋아요 ♥︎ {datas.goodLike}</span>,
    <span onClick={handleReplyOpen} key="comment-basic-reply-to">댓글 등록</span>,
    <span onClick={onEditclick} className="edit_btn" style={{ cursor: 'pointer' }}>수정</span>,
    <span onClick={onDeletelick} className="delete_btn" style={{ cursor: 'pointer' }}>삭제</span>,
    <div onClick={handleCommentOpen} className="comment_btn"
      style={{ cursor: 'pointer' }}>댓글({datas.comments.length})</div>
  ]

  return (
    <CommentSwappar >
      <Comment
        actions={actions}
        key={datas.msgId}
        author={datas.userName}
        avatar={
          <Avatar alt={datas.userName} src="/static/images/avatar/1.jpg" />
        }
        content={datas.msg}
        datetime={
          <Tooltip title={moment().subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss')}>
            <span>{time.fromNow()}</span>
          </Tooltip>
        } >
        {/* Comment Lists  */}
        {commentOpen &&
          <List>
            {datas.comments.map((cmt: any) => (
              <Comment avatar={
                <Avatar alt={datas.userName} src="/static/images/avatar/3.jpg" />
              } author={cmt[0]} content={cmt[1]} />
            )
            )
            }</List>
        }
        <AddLike handleLike={handleLike} /*msgid={datas.msgId}*/ />
        <DeleteModal onDeletelick={onDeletelick} deleteModalState={deleteModalState}
          handleMsgDelete={handleMsgDelete} msgid={datas.msgId} />
        <EditModal onEditclick={onEditclick} editState={editState} handleUpdateClick={handleUpdateClick}
          handleEditStoryChange={handleEditStoryChange} msgEditorHtml={msgEditorHtml} /*msgid={datas.msgId}*/ />
      </Comment>

      {/*Comment Form */}
      {replyOpen &&
        <FormWapper>
          <Form>
            <Form.Item>
              <Avatar alt={datas.userName} src="/static/images/avatar/3.jpg" />
              <TextArea rows={1} onChange={onHandleChange} value={commentValue} />
              <Button style={{ backgroundColor: '#6eb584', color: 'black' }}
                htmlType="submit" loading={false} type="primary" onClick={onsubmit} id={datas.msgId}>
                댓글 등록
            </Button>
            </Form.Item>
          </Form>
        </FormWapper>
      }

    </CommentSwappar >
  )
}
export default Reply
