import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';

// ▼ 회원가입 또는 로그인 페이지의 레이아웃을 나타내는 컴포넌트 ▼
//
interface AuthTemplateProps {
  children: any;
}
const AuthTemplate = ({ children }: AuthTemplateProps) => {
  const content = (
    <div>
      <p>누르면 첫 화면으로 이동합니다.</p>
    </div>
  );

  return (
    <>
      <Icon to="/">fama's</Icon>
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
        <Popover content={content} title="클릭! 🖕🏻">
          <Link to="/" style={{ textDecoration: 'none', color: '#01BF71' }}>fama's Com</Link>
        </Popover>
          </div>
        {children}
      </WhiteBox>
      </AuthTemplateBlock>
      </>
    )
}
export default AuthTemplate;
const AuthTemplateBlock = styled.div`
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: linear-gradient(9deg, transparent 75%, rgba(231,226,221,0.5) 25%);
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
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px
    
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 400px;
  border: 2px solid #000;
  background: white;
`;

const Icon = styled(Link)`
position: relative;
  margin-left: 32px;
  margin-top: 50px;
  text-decoration: none;
  color: #01BF71;
  font-weight: bold;
  font-size: 32px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;