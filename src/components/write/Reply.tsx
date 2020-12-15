
import React, { useState } from 'react';
import { CommentSwappar, FormWapper, ReplyBtn } from "./style/ReplyStyle"
import moment from 'moment';
import axios from 'axios';
import 'antd/dist/antd.css';
import Avatar from '@material-ui/core/Avatar';
import { Comment, Tooltip, Form, Button, List, Input } from 'antd'
import { Modal, DeleteBtn, DeleteBtnWrapper } from './DeleteModal'
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
  onsubmit: (e: React.MouseEvent<HTMLDivElement>) => void;
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
    {
      localStorage.getItem("token") &&
      setReplyOpen(!replyOpen);
    }
  }
  /*------ 대댓글모달훅 -------------------------*/

  // 삭제 관련 
  /*!------ 댓글삭제모달훅 -------------------------*/
  const [deleteModalState, setDeleteModalState] = useState<boolean>(false);
  const onDeleteClick = () => {
    {
      localStorage.getItem("token") &&
        setDeleteModalState(!deleteModalState)
    }
  }
  //댓글 삭제 이벤트
  const handleMsgDelete = async (e: React.MouseEvent<HTMLDivElement>) => {
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
    {
      localStorage.getItem("token") &&
        setEditState(!editState)
    }
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
      style={{ cursor: 'pointer', color: 'red', fontSize: '1rem' }}> 좋아요 ♥︎ {datas.goodLike}</span>,
    <span onClick={handleReplyOpen} key="comment-basic-reply-to" style={{ cursor: 'pointer', fontSize:'1rem',color: 'gray'  }}>댓글 등록</span>,
    <span onClick={onEditclick} className="edit_btn" style={{ cursor: 'pointer', fontSize:'1rem',color: 'gray'  }}>수정</span>,
    <span onClick={onDeleteClick} className="delete_btn" style={{ cursor: 'pointer', fontSize:'1rem',color: 'gray'  }}>삭제</span>,
    <div onClick={handleCommentOpen} className="comment_btn"
    style={{ cursor: 'pointer', fontSize: '1rem', color: 'gray' }}>댓글({datas.comments.length})</div>
  ]
  // incode HTML
  const changeHtml: any = [
    <div dangerouslySetInnerHTML={{ __html: datas.msg }} style={{fontSize:'1.2rem'}}></div>
  ]

  // username
  const author: any = [
    <div style={{fontSize:'1rem' ,color: 'gray'}}>{datas.userName}</div>
  ]
    // time
    const datetime: any = [
      <Tooltip title={moment().subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss')} >
          <span style={{fontSize:'1rem' ,color: 'gray'}}>{time.fromNow()}</span>
      </Tooltip>
    ]
  
    // avatar
    const avatar: any = [
      <Avatar alt={datas.userName} src="/static/images/avatar/1.jpg" style={{fontSize:'1.5rem', width:'50px', height:'50px'}}/>
    ]
  /*------ 대댓글 입력창 관련 -------------------------*/
    // avatar
    const replyAvatar: any = [
      <Avatar alt={datas.userName} src="/static/images/avatar/1.jpg" style={{fontSize:'1.5rem', width:'50px', height:'50px'}}/>
    ]
    // incode HTML
  const replyInput: any = [
      <>
      <TextArea rows={1} onChange={onHandleChange} value={commentValue} style={{  minWidth:'30px'}} />
      <ReplyBtn onClick={onsubmit} id={datas.msgId}>
        댓글 등록
        </ReplyBtn>
      </>
    ]
// const xSize = (e:React.KeyboardEvent<HTMLInputElement> ) =>
// {
//     e.style.height = '1px';
//     e.style.height = (e.scrollHeight + 12) + 'px';
// }


  return (
    <CommentSwappar >
      <Comment
        actions={actions}
        key={datas.msgId}
        author={author}
        avatar={avatar}
        content={changeHtml}
        datetime={datetime} >
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
            <DeleteBtnWrapper>
              <DeleteBtn onClick={handleMsgDelete} id={datas.msgId}>예</DeleteBtn>
              &nbsp;&nbsp;
              <DeleteBtn onClick={onDeleteClick}>아니오</DeleteBtn>
              </DeleteBtnWrapper>
            </div>
          </div>
        </Modal>
      }

      {/*Comment Form */}

      {replyOpen &&
        <FormWapper>
          <Form>
          <Comment
            key={datas.index}
              avatar={replyAvatar}
              content={replyInput}
          />
          
          </Form>
        </FormWapper>
      }
    </CommentSwappar >
  )
}
export default Reply;