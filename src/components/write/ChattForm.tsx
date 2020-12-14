import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import StoryForm from './StoryForm';
import { idText } from 'typescript';

const ChattForm = () => {
  /*!------ 리플데이터훅 -------------------------*/
  const [datas, setDatas] = useState<any>(null);
  /*!------ 댓글인풋데이터훅 -------------------------*/
  const [editorHtml, setEditorData] = useState<string>('');
  /*!------ 댓글수정인풋데이터훅 -------------------------*/
  const [msgEditorHtml, setMsgEditorHtml] = useState<string>('');
  /*!------ 댓글인풋모달훅 -------------------------*/
  const [editState, setEditState] = useState<boolean>(false);
  /*!------ 댓글삭제모달훅 -------------------------*/
  const [deleteModalState, setDeleteModalState] = useState<boolean>(false);
  const [rechatValue, setRechatValueState] = useState<string>('');
  /*!------ 대댓글데이터훅 -------------------------*/
  const [commentValue, setCommentValue] = useState<string>("");

  /*------ 유틸리티 ---------------------------------------------------*/

  // 화면 시작하자마자 데이터 랜더링하고 시작하기 위해 useEffect 사용
  useEffect(() => {
    axios
      .get('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/get-msg')
      .then((res) => {
        console.log(res);
        const datas = res.data.data.Items
        setDatas(datas);
      })
  }, []);
  //그냥 textarea 리셋
  const teAreaReset = () => {
    setCommentValue("");
  }
  //수정 에디터 리셋
  const EdionReset = () => {
    setMsgEditorHtml('')
  }
  //에디터 리셋
  const onReset = () => {
    setEditorData('')
  };

  /*!------ 유틸리티 ---------------------------------------------------*/

  /*------ 대댓글 ---------------------------------------------------*/

  //대댓글 관련 체인지
  const onHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.currentTarget.value)
  }
  // 대댓글 내용 이벤트
  const handleRechatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRechatValueState(e.target.value)
  }
  // 대댓글 등록 
  const onsubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.id)
    console.log(commentValue)
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    axios.post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/addComment/${e.currentTarget.id}`,
      { cmt: commentValue })
      .then((res) => {
        console.log("대댓글 res는요 :" + { res })
        teAreaReset()
        axios
          .get('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/get-msg')
          .then((res) => {
            console.log("대댓글 get res는요 :" + res.data)
            setDatas(res.data.data.Items)
          })
          .catch((err) => {
            console.log("대댓글 get err는요 :" + err)
          })
      }).catch((err) => {
        console.log("대댓글 post err는요 :" + err)
        teAreaReset()
      })
    onReset()
  }
  /*!------ 대댓글 ---------------------------------------------------*/


  /*------ 좋아요 ---------------------------------------------------*/

  //좋아요 관련 이벤트
  const handleLike = async (e: React.MouseEvent<HTMLInputElement>) => {
    console.log("🚀", e.currentTarget.id)
    e.preventDefault();
    await axios
      .post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/addLike/${e.currentTarget.id}`)
      .then((res) => {
        console.log(res.status)
        axios
          .get('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/get-msg')
          .then((res) => {
            console.log("좋아요 res는요 :" + res.data)
            setDatas(res.data.data.Items)
          })
          .catch((err) => {
            console.log("좋아요 err는요 :" + err)
          })
      }).catch((err) => {
        console.log("좋아요 err는요 :" + err)
      })

  }

  /*!------ 좋아요 ---------------------------------------------------*/



  /*------ 댓글 ---------------------------------------------------*/
  // 댓글 삭제 모달창 이벤트
  const onDeletelick = () => {
    setDeleteModalState(!deleteModalState)
  }
  //댓글 삭제 이벤트
  const handleMsgDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //console.log('=======>', e)
    //axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    e.preventDefault();
    // axios
    //   .post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/delete-msgData/${e.currentTarget.id}`)
    //   .then((res) => {
    //     console.log(res.status)
    //     onDeletelick();
    //     axios
    //       .get('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/get-msg')
    //       .then((res) => {
    //         console.log("res는요 :" + res.data)
    //         setDatas(res.data.data.Items)
    //       })
    //       .catch((err) => {
    //         console.log("err는요 :" + err)
    //       })
    //   })
    //   .catch((err) => console.log("err가:" + err));
  };

  // 댓글 수정 모달창 이벤트
  const onEditclick = () => {
    setEditState(!editState)
    onReset()
  }
  // 댓글 수정 체인지
  const handleEditStoryChange = (html: any) => {
    setMsgEditorHtml(html);
  }

  // 댓글 수정 이벤트
  const handleUpdateClick = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log('댓글 수정 =======>', e.currentTarget.id)
    console.log("🚀 ~ file: ChattForm.tsx ~ line 143 ~ handleUpdateClick ~ editorHtml", msgEditorHtml)
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    if (msgEditorHtml !== "") {
      axios
        .post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/update-msgData/${e.currentTarget.id}`, {
          msg: msgEditorHtml
        })
        .then((res) => {
          console.log(res)
          console.log(res.status)
          EdionReset()
          onEditclick()

          axios
            .get('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/get-msg')
            .then((res) => {
              console.log("res는요 :" + res.data)
              setDatas(res.data.data.Items)
            })
            .catch((err) => {
              console.log("err는요 :" + err)
            })

        })
        .catch((err) => console.log("err가:" + err));

      onReset();
    }
  };
  //댓글 등록 체인지
  const handleStoryChange = (html: any) => {
    setEditorData(html);
    console.log(html)
  };


  // 댓글 등록 이벤트
  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    if (editorHtml !== "") {
      axios
        .post('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/post-msg', {
          msg: editorHtml
        })
        .then((res) => {
          console.log(res.status)
          // 리랜더링 실시 해야함

          axios
            .get('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/get-msg')
            .then((res) => {
              console.log("res는요 :" + res.data)
              setDatas(res.data.data.Items)
            })
            .catch((err) => {
              console.log("err는요 :" + err)
            })

        })
        .catch((err) => console.log("err가:" + err));

      onReset();
    }
  };

  /*!------ 댓글 ---------------------------------------------------*/
  // 댓글 수정 이벤트 ??????????????????????????
  const handleReChatClick = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    console.log("🚀 ~ file: ChattForm.tsx ~ line 218 ~ handleReChatClick ~ editorHtml", editorHtml)
    if (editorHtml !== "") {
      axios
        .post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/update-msgData/${e.currentTarget.id}`, {
          username: "kimcoding",
          msg: editorHtml
        })
        .then((res) => {
          console.log(res.status)

          axios
            .get('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/get-msg')
            .then((res) => {
              console.log("res는요 :" + res.data)
              setDatas(res.data.data.Items)
            })
            .catch((err) => {
              console.log("err는요 :" + err)
            })

        })
        .catch((err) => console.log("err가:" + err));

      onReset();
    }
  };



  return (
    <StoryForm datas={datas} editState={editState} handleLike={handleLike} onHandleChange={onHandleChange} onsubmit={onsubmit} handleEditStoryChange={handleEditStoryChange}
      deleteModalState={deleteModalState} editorHtml={editorHtml} msgEditorHtml={msgEditorHtml} rechatValue={rechatValue}
      handleMsgDelete={handleMsgDelete} handleUpdateClick={handleUpdateClick} handleRechatChange={handleRechatChange}
      onDeletelick={onDeletelick} onEditclick={onEditclick} handleStoryChange={handleStoryChange}
      handleSubmitClick={handleSubmitClick} handleReChatClick={handleReChatClick} commentValue={commentValue}
    />
  )
}

export default ChattForm;
