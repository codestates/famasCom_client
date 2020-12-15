import React from 'react'
import KakaoLogin from 'react-kakao-login'

const key = "2b5add5ee8205a2f29c625c71f5360eb"
const Kakao = "../../images/kakao_login_medium_narrow.png"
export default {
    title: "KakaoLogin",
    component: KakaoLogin,
};

export const Default = () => (
    <KakaoLogin
        token={key}
        onSuccess={console.log}
        onFail={console.error}
        onLogout={console.info}
    />
);