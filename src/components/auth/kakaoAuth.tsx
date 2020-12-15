import KakaoLogin from 'react-kakao-login'
import styled from 'styled-components';

const key = "2b5add5ee8205a2f29c625c71f5360eb"
const Kakaoimg = "../../images/kakao_login_medium_narrow.png"

export default {
    title: "KakaoLogin",
    component: KakaoLogin,
};

export const Kakao = () => (
    <StyledKakaoLogin
        token={key}
        onSuccess={console.log}
        onFail={console.error}
        onLogout={console.info}
    />
);

const StyledKakaoLogin = styled(KakaoLogin)`
  display: block;
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