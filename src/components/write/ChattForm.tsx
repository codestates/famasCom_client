import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import StoryForm from './StoryForm';

const ChattForm = () => {
  const [datas, setDatas] = useState<any>(null);
  const [editorHtml, setEditorData] = useState<string>('');
  const [editState, setEditState] = useState<boolean>(false);
  const [deleteModalState, setDeleteModalState] = useState<boolean>(false);
  const [rechatValue, setRechatValueState] = useState<string>('');

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
  const handleStoryChange = (html:any) => {
    setEditorData(html);
    console.log(html)
  }; 
  // 대댓글 내용 변경 이벤트
  const handleRechatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRechatValueState(e.target.value)
  }
  
  const onReset = () => {
    setEditorData('')
  }
  
  // 댓글 삭제 모달창 이벤트
  const onDeletelick = () => {
		setDeleteModalState(!deleteModalState)
	}
	// 수정 모닱창  이벤트
	const onEditclick = () => {
    setEditState(!editState)
    onReset()
  }

  //댓글 삭제 이벤트
  const handleMsgDelete = (e: React.MouseEvent<HTMLButtonElement>): void =>  {
    console.log("!!!!!!!!!!!!!!!!!!!@@@@@@@@@@@@@@@@@@@")
    e.preventDefault();
    axios
      .post("https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/delete-msgData/{e.target.id}")
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
  const handleUdateClick = (e: React.FormEvent<HTMLInputElement>): void =>  {
    e.preventDefault();
    if (editorHtml !== "") {
      axios
        .post("https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/update-msgData/{e.target.id}", {
          username: "kimcoding",
          msg: editorHtml
        })
        .then((res) => {
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

 // 대댓글 등록 이벤트
  const handleReChatClick = (e: React.FormEvent<HTMLInputElement>): void =>  {
    e.preventDefault();
    if (editorHtml !== "") {
      axios
        .post('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/update-msgData/{msgId}', {
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
  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>): void =>  {
    e.preventDefault();
    if (editorHtml !== "") {
      let postData = {
        username: "kimcoding",
        msg: editorHtml 
      };
  
      let axiosConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
      };
  
      axios.post('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/post-msg', postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .then((res) => {
          console.log(res)
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
    <StoryForm datas={datas} editState={editState}
      deleteModalState={deleteModalState} editorHtml={editorHtml} rechatValue={rechatValue}
      handleMsgDelete={handleMsgDelete} handleUdateClick={handleUdateClick} handleRechatChange={handleRechatChange}
      onDeletelick={onDeletelick} onEditclick={onEditclick} handleStoryChange={handleStoryChange}
      handleSubmitClick={handleSubmitClick} handleReChatClick={handleReChatClick}
    />
  )
}

export default ChattForm;
