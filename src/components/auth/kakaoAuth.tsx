import KakaoLogin from 'react-kakao-login'
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const key = process.env.kakaoKey


export default {
    title: "KakaoLogin",
    component: KakaoLogin,
};


export const Kakao = () => {
    const history = useHistory();
    const kakaoLogin = {
        _success(result: any) {
            if (result) {
                axios.post("https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/kakaoSiginIn", {
                    email: result.profile.kakao_account.email,
                    nickName: result.profile.kakao_account.profile.nickname,
                    profileImage: result.profile.kakao_account.profile.thumbnail_image_url
                }).then((res) => {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("kakao_token", result.response.access_token)
                }).then(() => {
                    if (localStorage.getItem("token") && localStorage.getItem("kakao_token")) {
                        history.push("/");
                    }
                }).catch((res) => {
                    if (res.status === 409) {
                        alert('로그인에 실패하였습니다');
                    }
                });
            }
        }
    }
    return (<StyledKakaoLogin
        token={key}
        onSuccess={result => kakaoLogin._success(result)}
        onFail={console.error}
        onLogout={console.info}
    />)
};


const StyledKakaoLogin = styled(KakaoLogin)`
        display: contents;
        padding: 0;
        width: 250px;
        height: 49px;
        line-height: 49px;
        color: #3C1E1E;
        background-color: #FFEB00;
        border: 1px solid transparent;
        border-radius: 3px;
        font-size: 16px;
        text-align: center;
`;