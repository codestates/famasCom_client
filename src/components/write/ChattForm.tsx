import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import StoryForm from './StoryForm';
import { idText } from 'typescript';

const ChattForm = () => {
  /*!------ 리플데이터훅 -------------------------*/
  const [datas, setDatas] = useState<any>(null);
  /*!------ 댓글인풋데이터훅 -------------------------*/
  const [editorHtml, setEditorData] = useState<string>('');
  /*!------ 대댓글데이터훅 -------------------------*/
  const [commentValue, setCommentValue] = useState<string>("");
  /*!------ 데이터리랜더훅 -------------------------*/
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

  //textarea 리셋
  const teAreaReset = () => {
    setCommentValue("");
  }
  //에디터 리셋
  const onReset = () => {
    setEditorData('')
  };
  // data reRending 함수
  const reRending = () => {
    setRefresh(!refresh)
  }

  /*!------ 유틸리티 ---------------------------------------------------*/

  /*------ 대댓글 ---------------------------------------------------*/

  //대댓글 관련 체인지
  const onHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.currentTarget.value)
  }
  // 대댓글 등록 
  const onsubmit = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    axios.post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/addComment/${e.currentTarget.id}`,
      { cmt: commentValue })
      .then((res) => {
        teAreaReset()
        reRending()
      }).catch((err) => {
        console.log("대댓글 post err:" + err)
        teAreaReset()
      })
    onReset()
  }
  /*!------ 대댓글 ---------------------------------------------------*/


  /*------ 좋아요 ---------------------------------------------------*/

  //좋아요 관련 이벤트
  const handleLike = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    {
      localStorage.getItem("token") &&
      await axios
        .post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/addLike/${e.currentTarget.id}`)
        .then((res) => {
          console.log(res.status)
          reRending()
        }).catch((err) => {
          console.log("좋아요 err :" + err)
        })
    }
  }

  /*!------ 좋아요 ---------------------------------------------------*/



  /*------ 댓글 ---------------------------------------------------*/

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
          reRending()
        })
        .catch((err) => console.log("err가:" + err));

      onReset();
    }
  };




  return (
    <StoryForm reRending={reRending}
      onReset={onReset}
      datas={datas}
      handleLike={handleLike}
      onHandleChange={onHandleChange}
      onsubmit={onsubmit}
      editorHtml={editorHtml}
      handleStoryChange={handleStoryChange}
      handleSubmitClick={handleSubmitClick}
      commentValue={commentValue}
    />
  )
}

export default ChattForm;

/*!------ 댓글 ---------------------------------------------------*/
  // 댓글 수정 이벤트 ?????????????????????????? 추후 기능구현!
  // const handleReChatClick = (e: React.FormEvent<HTMLInputElement>): void => {
  //   e.preventDefault();
  //   axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
  //   console.log("🚀 ~ file: ChattForm.tsx ~ line 218 ~ handleReChatClick ~ editorHtml", editorHtml)
  //   if (editorHtml !== "") {
  //     axios
  //       .post(`https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/update-msgData/${e.currentTarget.id}`, {
  //         username: "kimcoding",
  //         msg: editorHtml
  //       })
  //       .then((res) => {
  //         console.log(res.status)

  //         axios
  //           .get('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/get-msg')
  //           .then((res) => {
  //             console.log("res :" + res.data)
  //             setDatas(res.data.data.Items)
  //           })
  //           .catch((err) => {
  //             console.log("err :" + err)
  //           })

  //       })
  //       .catch((err) => console.log("err가:" + err));

  //     onReset();
  //   }
  // };
  // // 대댓글 내용 이벤트
  // const handleRechatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setRechatValueState(e.target.value)
  // }