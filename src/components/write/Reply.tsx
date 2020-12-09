import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'antd/dist/antd.css';
import Avatar from '@material-ui/core/Avatar';
import { Comment,Tooltip, Button, Form, List, Input  } from 'antd'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

const Replying = styled.div`
.reply {
  text-decoration: none;
  cursor: pointer;
}
`;

const Footer = styled.div`
display: flex;
`;

const Line = styled.div`
dispaly: block;
width: 1022px;
height: 10px;
color: #fff;
`;

type StoryFormProps = {
  datas: any;
  editState: boolean;
  rechatValue: string;
  deleteModalState: boolean;
  onDeletelick: () => void;
  onEditclick: () => void;
  handleMsgDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleRechatChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUdateClick: (e: React.FormEvent<HTMLInputElement>) => void;
  handleReChatClick: (e: React.FormEvent<HTMLInputElement>) => void;
};

const { TextArea } = Input;

const Reply = ({ datas,
  deleteModalState, onDeletelick, handleMsgDelete,
  handleUdateClick, editState, onEditclick}: StoryFormProps) => {
  
  console.log("datas!!!!!!!!!!!", datas)

  const [replyState, setReplyState] = useState<boolean>(false);
  const handleReplyOpen =  (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setReplyState(!replyState);
    }
  
    return (
      datas === null ? '' : datas.map((item:any) => {
        console.log(item)
        const actions:any = [
          <span className="iLike" style={{ cursor: 'pointer' }}> 좋아요 ♥︎ {item.like}</span>,
          <span onClick={handleReplyOpen} key="comment-basic-reply-to">댓글 등록</span>,
          <span className="edit_btn" onClick={onEditclick} style={{ cursor: 'pointer' }}>수정</span>,
          <span className="delete_btn" key={item.msgId} onClick={onDeletelick} style={{ cursor: 'pointer' }}>삭제</span>
        ];
        return (
          <React.Fragment>
            <Comment
              key={item.msgId}
              // autor={item.userName}
              actions={actions}
              avatar={
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              }
              content={
                <iframe className="story" frameBorder="0" width={100} srcDoc={item.msg}></iframe>
              }
              datetime={
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
              } >
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
              <DeleteModal onDeletelick={onDeletelick} deleteModalState={deleteModalState} handleMsgDelete={handleMsgDelete} msgid={item.msgId} />
              <EditModal msgid={item.msgId} onEditclick={onEditclick} editState={editState} handleUdateClick={handleUdateClick} />
              <Footer>
                {replyState &&
                  <>
                    <Form.Item>
                      <TextArea rows={4} /*onChange={onHandleChange} value={CommentValue} */ />
                    </Form.Item>
                    <Form.Item>
                      <Button /*htmlType="submit" loading={submitting} /*onClick={onsubmit}*/ type="primary">
                        댓글 등록
            </Button>
                    </Form.Item>
                  </>}
        
              </Footer>
            
            </Comment>
            <Line><br></br></Line>
          </React.Fragment>
        )
      })
    )
  }
  export default Reply
