import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import StoryForm from './StoryForm';
import { idText } from 'typescript';

// axios.interceptors.request.use(async function (config) {
//   const token: = localStorage.getItem("token")
//   console.log("🚀 ~ file: ChattForm.tsx ~ line 8 ~ token", token)
//   config.headers.Authorization = token;
//   //config.headers = {'Access-Control-Allow-Credentials':true}
//   return config;
// });



const ChattForm = () => {
  const [datas, setDatas] = useState<any>(null);
  const [editorHtml, setEditorData] = useState<string>('');
  const [editState, setEditState] = useState<boolean>(false);
  const [deleteModalState, setDeleteModalState] = useState<boolean>(false);
  const [rechatValue, setRechatValueState] = useState<string>('');
  const [commentValue, setCommentValue] = useState<string>("");

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
  //대댓글 관련 체인지
  const onHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("🚀 ~ file: ChattForm.tsx ~ line 59 ~ onHandleChange ~ e.currentTarget.value", e.currentTarget.value)
    setCommentValue(e.currentTarget.value)
  }
  //대댓글 등록 
  const onsubmit = async (e: any) => {
    e.preventDefault();
    console.log(e.currentTarget.id)
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    await axios.post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/addComment/${e.currentTarget.id}`, { cmt: commentValue })
  }
  const handleStoryChange = (html: any) => {
    setEditorData(html);
    console.log(html)
  };
  // 대댓글 내용 변경 이벤트
  const handleRechatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRechatValueState(e.target.value)
  }

  const onReset = () => {
    setEditorData('')
  };

  //좋아요 관련 이벤트
  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("🚀 ~ file: Reply.tsx ~ line 46 ~ handleLike ~ e", e)
    e.preventDefault();
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    await axios
      .post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/addLike/${e.currentTarget.id}`)
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
      }).catch((err) => {
        console.log("err는요 :" + err)
      })
  }

  // 댓글 삭제 모달창 이벤트
  const onDeletelick = () => {
    setDeleteModalState(!deleteModalState)
  }
  // 수정 모달창  이벤트
  const onEditclick = () => {
    setEditState(!editState)
    onReset()
  }

  //댓글 삭제 이벤트
  const handleMsgDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('=======>', e.currentTarget.id)
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    e.preventDefault();
    await axios
      .post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/delete-msgData/${e.currentTarget.id}`)
      .then((res) => {
        console.log(res.status)
        onDeletelick();
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
  };

  // 댓글 수정 이벤트
  const handleUdateClick = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    if (editorHtml !== "") {
      axios
        .post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/update-msgData/${e.currentTarget.id}`, {
          username: "kimcoding",
          msg: editorHtml
        })
        .then((res) => {
          console.log(res)
          console.log(res.status)
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

  // 메세지 수정 이벤트
  const handleReChatClick = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
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
  // 게시물 등록 이벤트
  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (editorHtml !== "") {
      axios
        .post('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/post-msg', {
          username: "kimcoding",
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

  return (
    <StoryForm datas={datas} editState={editState} handleLike={handleLike} onHandleChange={onHandleChange} onsubmit={onsubmit}
      deleteModalState={deleteModalState} editorHtml={editorHtml} rechatValue={rechatValue}
      handleMsgDelete={handleMsgDelete} handleUdateClick={handleUdateClick} handleRechatChange={handleRechatChange}
      onDeletelick={onDeletelick} onEditclick={onEditclick} handleStoryChange={handleStoryChange}
      handleSubmitClick={handleSubmitClick} handleReChatClick={handleReChatClick} commentValue={commentValue}
    />
  )
}

export default ChattForm;
