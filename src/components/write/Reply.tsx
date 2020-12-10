import React, { useState } from 'react';
import { CommentSwappar, Line } from "./style/ReplyStyle"
import axios from 'axios';
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
  editState: boolean;
  rechatValue: string;
  commentValue: string;
  deleteModalState: boolean;
  onDeletelick: () => void;
  onEditclick: () => void;
  handleLike: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onHandleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleMsgDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleRechatChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUdateClick: (e: React.FormEvent<HTMLInputElement>) => void;
  handleReChatClick: (e: React.FormEvent<HTMLInputElement>) => void;
  onsubmit: (e: any) => void;
};

const { TextArea } = Input

// type TextArea = { // The common Part
//   className?: string;
//   placeholder?: string;
// } & ({ // The discriminated union
//   type?: "text";
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// } | {
//   type: "textarea";
//   onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
// })

const Reply = ({ datas,
  deleteModalState, onDeletelick, handleMsgDelete,
  handleUdateClick, editState, onEditclick, handleLike, onHandleChange, commentValue, onsubmit }: StoryFormProps) => {

  //console.log("🚀 ~ file: Reply.tsx ~ line 44 ~ datas", datas)
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
    <span onClick={handleLike} className="iLike" style={{ cursor: 'pointer' }}> 좋아요 ♥︎ {datas.goodLike}</span>,
    <span onClick={handleReplyOpen} key="comment-basic-reply-to">댓글 등록</span>,
    <span onClick={onEditclick} className="edit_btn" style={{ cursor: 'pointer' }}>수정</span>,
    <span onClick={onDeletelick} className="delete_btn" style={{ cursor: 'pointer' }}>삭제</span>,
    <div onClick={handleCommentOpen} className="comment_btn" style={{ cursor: 'pointer' }}>댓글({datas.comments.length})</div>
  ]

  return (
    <CommentSwappar>
      <Comment
        actions={actions}
        key={datas.msgId}
        author={datas.userName}
        avatar={
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        }
        content={datas.msg}
        datetime={
          <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().subtract(1, 'days').fromNow()}</span>
          </Tooltip>
        } >
        {commentOpen &&
          <List>
            {datas.comments.map((cmt: any) => (<Comment avatar={
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            } author={cmt[0]} content={cmt[1]} />
            )
            )
            }</List>}
        <AddLike handleLike={handleLike} msgid={datas.msgId} />
        <DeleteModal onDeletelick={onDeletelick} deleteModalState={deleteModalState} handleMsgDelete={handleMsgDelete} msgid={datas.msgId} />
        <EditModal onEditclick={onEditclick} editState={editState} handleUdateClick={handleUdateClick} msgid={datas.msgId} />
      </Comment>

      {replyOpen &&
        <Form>
          <Form.Item>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <TextArea rows={1} onChange={onHandleChange} value={commentValue} />
            <Button htmlType="submit" /*loading={submitting}*/ type="primary" onClick={onsubmit} id={datas.msgId}>
              댓글 등록
            </Button>
          </Form.Item>
        </Form>
      }

    </CommentSwappar>
  )
}
{/* {item.comments.length === 0 ? <></> :
      item.comments.map((cmt:any) => {
        console.log("cmt>>>>>>>>>>>>>>>>>>>🐶", cmt)
        return (
          <Comment
          key = {cmt.index}
          actions = {actions}
          avatar={<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />}
          author = {cmt[0]}
          content = {cmt[1]}
          datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }  />
        )
      })
    } */}
export default Reply
