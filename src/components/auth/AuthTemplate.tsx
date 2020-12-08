import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ▼ 회원가입 또는 로그인 페이지의 레이아웃을 나타내는 컴포넌트 ▼

interface AuthTemplateProps {
  children: any;
}
const AuthTemplate = ({children}:AuthTemplateProps) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">FAMAS COM</Link>
          </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
    )
}

export default AuthTemplate;

const AuthTemplateBlock = styled.div`
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: linear-gradient(9deg, transparent 75%, #f0f0f0 25%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    dispaly: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  border: 2px solid #000;
  background: white;
`;