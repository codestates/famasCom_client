import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Secession from '../components/SecessionModal'

type ModifyInfoTtpe = {
    id: boolean;
    password: boolean;
    email: boolean;
    name: boolean;
    nameBtn: boolean;
    pwBtn: boolean;
    idBtn: boolean;
    emailBtn: boolean;
    currentId: string;
    currentPassword: string;
    currentEmail: string;
    inputId: string;
    inputPassword: string;
    inputEmail: string;
}

export default function ModifyInfo() {
    const [infoModify, setInfoModify] = useState<ModifyInfoTtpe>({
        id: false,
        password: false,
        email: false,
        name: false,
        nameBtn: false,
        pwBtn: false,
        idBtn: false,
        emailBtn: false,
        currentId: 'kimcoding',
        currentPassword: '',
        currentEmail: 'haseok2118@gmail.com',
        inputId: '',
        inputPassword: '',
        inputEmail: ''
    });
    const [secessionState, setSecessionState] = useState<boolean>(false);
    useEffect(() => {
        axios
            .get('http://localhost:8080/user/info')
            .then((res) => {
                console.log(res);
                const { data } = res;
                setInfoModify(Object.assign({}, infoModify, { currentId: data.username, currentPassword: data.password, currentEmail: data.email }));
            })
    }, [infoModify.currentId, infoModify.currentPassword, infoModify.currentEmail]);

    const infoBtnClick = (e: any) => {
        if (e.target.className === 'modifyUsernameBtn') {
          setInfoModify({
            ...infoModify, nameBtn: true, name: true
          })
        } else if (e.target.className === 'modifyPwBtn') {
          setInfoModify({
            ...infoModify, pwBtn: true, password: true
        })
        } else if (e.target.className === 'modifyIdBtn') {
          setInfoModify({
            ...infoModify, idBtn: true, id: true
        })
        } else if (e.target.className === 'modifyMailBtn') {
          setInfoModify({
            ...infoModify, emailBtn: true, email: true
        })
        }
      }
      
      const infoBtnClickForBack = (e: any) => {
        
        if (e.target.className === 'modifyUsernameBtn') {
          setInfoModify({
            ...infoModify, nameBtn: false, name: false
        })
        } else if (e.target.className === 'modifyPwBtn') {
          setInfoModify({
            ...infoModify, pwBtn: false, password: false
        })
        } else if (e.target.className === 'modifyIdBtn') {
          setInfoModify({
            ...infoModify, idBtn: false, id: false
        })
        } else if (e.target.className === 'modifyMailBtn') {
          setInfoModify({
            ...infoModify, emailBtn: false, email: false
        })
        }
      }
   
    const onSecessionlick = () => {
        setSecessionState(false)
    }
    const handleSecessionOpen = () => {
        setSecessionState(true)
    }
    const infoModifyHandler = async (e: any) => {
        if (e.target.className === 'modifyUsernameBtn') {
            await axios.post('http://localhost:8080/user/changeInfo', {
                username: infoModify.inputId,
            });
            setInfoModify((prev) => {
                return Object.assign({}, infoModify, { id: !prev.id, inputId: '', currentId: infoModify.inputId });
            });
        } else if (e.target.className === 'modifyPwBtn') {
            await axios.post('http://localhost:8080/user/changeInfo', {
                password: infoModify.inputPassword,
            });
            setInfoModify((prev) => {
                return Object.assign({}, infoModify, { password: !prev.password, inputPassword: '', currentPassword: infoModify.inputPassword });
            });
            
        } else if (e.target.className === 'secession_btn') {
            await axios.post('http://localhost:8080/user/changeInfo');
            // history.push("/main")
        };
    }
        console.log(infoModify);
        const inputModifyChange = (e: any) => {
            if (e.target.id === 'inputModifyId') {
                setInfoModify(Object.assign({}, infoModify, { inputId: e.target.value }));
            } else if (e.target.id === 'inputModifyPassword') {
                setInfoModify(Object.assign({}, infoModify, { inputPassword: e.target.value }));
            }
        };
        return (
            <StyleModify>
                <div className="userInfoWrapper" >
                    <div className="infoChange">
                        <span className="modi-line-or">
                            <span className="modi-txt-or">회원 정보 수정</span>
                        </span>
                        <div className="infoData">
                            <div className="thumb_profile">
                                <img src="https://ifh.cc/g/40WSh1.png" width="80" height="80"></img>
                            </div>
                            <button>
                                <img src="https://ifh.cc/g/9DRZaE.png" width="31" height="31"></img>
                            </button>
                        
                            <span className="modify-txt">별명</span>
                            <div className="modify-input">
                                {infoModify.name ? <input id="inputModifyId" type="text" onChange={inputModifyChange} value={infoModify.inputId} placeholder={infoModify.currentId} />
                                    : <span className="seenText">{infoModify.currentId}</span>}
                                {infoModify.nameBtn ? (<><button className="modifyUsernameBtn" onClick={infoModifyHandler}>확인</button> <button className="modifyUsernameBtn" onClick={infoBtnClickForBack}>취소</button></>)
                                    : <button className="modifyUsernameBtn" onClick={infoBtnClick}>수정</button>}
                            </div>
                        </div>
                        <div className="infoData">
                            <span className="modify-txt">비밀번호</span>
                            <div className="modify-input">
                                {infoModify.password ? <input id="inputModifyPassword" type="text" onChange={inputModifyChange} value={infoModify.inputPassword} />
                                    : <span className="seenText">****</span>}
                                {infoModify.pwBtn ? (<><button className="modifyPwBtn" onClick={infoModifyHandler}  >확인</button> <button className="modifyPwBtn" onClick={infoBtnClickForBack}>취소</button></>)
                                    : <button className="modifyPwBtn" onClick={infoBtnClick}>수정</button>}
                            </div>
                        </div>
                        <div className="infoData">
                            <span className="modify-txt">휴대폰 번호(아이디)</span>
                            <div className="modify-input">
                                {infoModify.id ? <input id="inputModifyPassword" type="text" onChange={inputModifyChange} value={infoModify.inputPassword} />
                                    : <span className="seenText">****</span>}
                                {infoModify.idBtn ? (<><button className="modifyIdBtn" onClick={infoModifyHandler}  >확인</button> <button className="modifyIdBtn" onClick={infoBtnClickForBack}>취소</button></>)
                                    : <button className="modifyIdBtn" onClick={infoBtnClick}>수정</button>}
                            </div>
                        </div>
                        <div className="infoData">
                            <span className="modifyEmail">전자우편 주소</span>
                            <div className="modify-input">
                                {infoModify.email ? <input id="inputModifyEmail" type="text" onChange={inputModifyChange} value={infoModify.inputEmail} />
                                    : <span className="seenText">{infoModify.currentEmail}</span>}
                                {infoModify.emailBtn ? (<><button className="modifyMailBtn" onClick={infoModifyHandler}  >확인</button> <button className="modifyMailBtn" onClick={infoBtnClickForBack}>취소</button></>)
                                    : <button className="modifyMailBtn" onClick={infoBtnClick}>수정</button>}
                            </div>
                        </div>
                    </div>
                    <div className="leaveMember" onClick={handleSecessionOpen}>탈퇴</div>
                    <Secession infoModifyHandler={infoModifyHandler} onSecessionlick={onSecessionlick} secessionState={secessionState} />
                </div>
            </StyleModify>
        );
    }

const StyleModify = styled(Responsive)`{
  .userInfoWrapper {
        /* border: 1px solid rgb(28, 28, 233); */
        display: block;
        width: 700px;
        height: 430px;
        margin: 0 auto 70px;
        font - family: "Noto Sans Light", "Malgun Gothic", sans - serif;
    }
  .userInfoText {
        height: 100px;
        margin - bottom: 15px;
        /* border: 1px solid rgb(169, 169, 230); */
    }
  .infoChange {
        height: 400px;
        text - align: center;
        /* border: 1px solid rgb(217, 217, 227); */
    }
  .leaveMember {
        /* margin-top: 205px; */
        display: inline; 
        height: 100px;
        cursor: pointer;
        /* border: 1px solid rgb(74, 74, 80); */
    }
  .infoData {
        display: flex;
        flex - direction: column;
        height: 100px;
        border: none;
        justify - content: center;
        align - items: center;
        border - bottom: 1px solid #eee;
    }
  .seenText {
        position: relative;
        margin: 0 80px 0 10px;
        font-size: 18px;
        height: 32px;
        width: 100 %;
    }
  .modify - txt,
  .modifyEmail {
        top: 5 %;
        margin - left: 10px;
        width: 100 %;
        text - align: left;
        position: relative;
        display: block;
        font - weight: 400;
        font - size: 18px;
        color: #333;
    }
  #inputModifyId {
        width: 150px;
        height: 25px;
        margin - left: 10px;
        display: inline;
        border - radius: 10px;
        border: none;
        border-bottom: black;
        outline-style: none;
        font-size: 18px;
    }
  #inputModifyPassword {
        width: 150px;
        height: 25px;
        margin - left: 10px;
        display: inline;
        border - radius: 10px;
        border: 1px solid rgb(168, 168, 174);
    }
  .modify - input {
        top: 16 %;
        width: 100 %;
        position: relative;
        margin: 0 10px 0 0;
        text - align: initial;
        display: inline - block;
        height: 25px;
        font - size: 17px;
        line - height: 32px;
        color: #959595;
        vertical - align: top;
    }
  .modifyIdBtn
  .modifyMailBtn
  .modifyPwBtn
  .modifyUsernameBtn {
        width: 116px;
        height: 32px;
        margin - left: 5px;
        border: 1px solid #bbb;
        border - radius: 16px;
        color: #666;
        outline: none;
        background - color: white;
        font - size: 13px;
        line - height: 15px;
        float: right;
    }
    .modifyIdBtn
    .modifyMailBtn
    .modifyPwBtn
    .modifyUsernameBtn: hover {
        color: rgb(179, 173, 173);
    }
  
  .modi - line - or {
        top: 10 %;
        position: relative;
        display: block;
        width: 100 %;
        padding: 10px 0;
    }
  .modi - line - or: before,
  .modi - line - or: after {
        display: inline - block;
        width: calc(47.5 % - 20px);
        height: 1px;
        margin: 8px 0;
        background - color: rgba(0, 0, 0, 0.384);
        vertical - align: top;
        content: "";
    }
  .modi - txt - or {
        display: inline - block;
        width: 70px;
        font - size: 12px;
        line - height: 18px;
        text - align: center;
        color: rgba(0, 0, 0, 0.637);
    }
}
`