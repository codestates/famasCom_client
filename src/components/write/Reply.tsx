
import React, { useState } from 'react';
import { CommentSwappar, FormWapper } from "./style/ReplyStyle"
import moment from 'moment';
import axios from 'axios';
import 'antd/dist/antd.css';
import Avatar from '@material-ui/core/Avatar';

import { Comment, Tooltip, Form, Button, List, Input } from 'antd'
import { Modal } from './DeleteModal'
import EditModal from './EditModal'
import { type } from 'os';
import { StyleButton } from "./style/StoryFormstyle.js"
import AddLike from './AddLike';


type StoryFormProps = {
  datas: any;
  onReset: () => void;
  commentValue: string;
  reRending: () => void;
  handleLike: (e: React.MouseEvent<HTMLInputElement>) => void;
  onHandleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onsubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const { TextArea } = Input

const Reply = ({ datas,
  handleLike, onHandleChange, commentValue,
  onsubmit, reRending, onReset }: StoryFormProps) => {

  /*---------------------------------------------------*/

  const time = moment(datas.createdAt, "YYYYMMDD")

  //대댓글 랜더 관련 훅 
  const [commentOpen, setCommentOpen] = useState<boolean>(false);
  //대댓글 랜더 관련 토글
  const handleCommentOpen = () => {
    setCommentOpen(!commentOpen);
  }

  //대댓글 관련 
  /*!------ 대댓글모달훅 -------------------------*/
  //훅
  const [replyOpen, setReplyOpen] = useState<boolean>(false);

  //토글 
  const handleReplyOpen = () => {
    setReplyOpen(!replyOpen);
  }
  /*------ 대댓글모달훅 -------------------------*/

  // 삭제 관련 
  /*!------ 댓글삭제모달훅 -------------------------*/
  const [deleteModalState, setDeleteModalState] = useState<boolean>(false);
  const onDeleteClick = () => {
    setDeleteModalState(!deleteModalState)
  }
  //댓글 삭제 이벤트
  const handleMsgDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios
      .post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/delete-msgData/${e.currentTarget.id}`)
      .then((res) => {
        console.log(res.status)
        onDeleteClick()
        reRending()
      })
      .catch((err) => console.log("err가:" + err));
  };
  /*------ 댓글삭제 -------------------------*/
  /*!------ 댓글수정 -------------------------*/
  /*!------ 댓글수정인풋데이터훅 -------------------------*/
  const [msgEditorHtml, setMsgEditorHtml] = useState<string>('');
  //수정 에디터 리셋
  const EdionReset = () => {
    setMsgEditorHtml('')
  }
  /*!------ 댓글수정모달훅 -------------------------*/
  const [editState, setEditState] = useState<boolean>(false);
  // 댓글 수정 모달창 이벤트
  const onEditclick = () => {
    setEditState(!editState)
  }
  // 댓글 수정 체인지
  const handleEditStoryChange = (html: any) => {
    setMsgEditorHtml(html);
  }


  // 댓글 수정 이벤트
  const handleUpdateClick = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    if (msgEditorHtml !== "") {
      axios
        .post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/update-msgData/${e.currentTarget.id}`, {
          msg: msgEditorHtml
        })
        .then((res) => {
          console.log(res.status)
          EdionReset()
          onEditclick()
          reRending()
        })
        .catch((err) => console.log("err:" + err));
      onReset();
    }
  };






  /*------ 댓글수정모달훅 -------------------------*/
  //comment Actions
  const actions: any = [
    <span id={datas.msgId} onClick={handleLike} className="iLike"
      style={{ cursor: 'pointer' }}> 좋아요 ♥︎ {datas.goodLike}</span>,
    <span onClick={handleReplyOpen} key="comment-basic-reply-to">댓글 등록</span>,
    <span onClick={onEditclick} className="edit_btn" style={{ cursor: 'pointer' }}>수정</span>,
    <span onClick={onDeleteClick} className="delete_btn" style={{ cursor: 'pointer' }}>삭제</span>,
    <div onClick={handleCommentOpen} className="comment_btn"
      style={{ cursor: 'pointer' }}>댓글({datas.comments.length})</div>
  ]
  // incode HTML
  const changeHtml: any = [
    <div dangerouslySetInnerHTML={{ __html: datas.msg }}></div>
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
        content={changeHtml}
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
        <AddLike handleLike={handleLike} />

        {/* EditModal */}

        <EditModal onEditclick={onEditclick} editState={editState} handleUpdateClick={handleUpdateClick}
          handleEditStoryChange={handleEditStoryChange} msgEditorHtml={msgEditorHtml} msgid={datas.msgId} />
      </Comment>

      {/* deleteModal */}

      {deleteModalState &&
        <Modal>
          <div id="myModal" className="authModal">
            <div className="modal-content">
              <span className="close" onClick={onDeleteClick}>&times;</span>
              <p>삭제하시겠습니까?</p>
              <Button
                onClick={handleMsgDelete} id={datas.msgId}>예</Button>
              <Button onClick={onDeleteClick}>아니오</Button>
            </div>
          </div>
        </Modal>
      }

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