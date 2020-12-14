import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';

// 회원가입 또는 로그인 폼을 나타내는 컴포넌트
type typeProps = {
  value: string;
  email: string;
  password: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, props: RouteComponentProps) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

interface Indexable {
  [key: string]: string;
}

const textMap: Indexable = {
  login: "로그인",
  signup: "회원가입",
}

const AuthForm = ({ value, email, password, handleSubmit, handleChange }: typeProps) => {
  const text = textMap[value];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput autoComplete="username" name="email" value={email} onChange={handleChange} placeholder="첫 번째! 계정을 입력해 주세요." />
        <StyledInput autoComplete="new-password" name="password" type="password" value={password} onChange={handleChange} placeholder="두 번째! 비밀번호를 입력해 주세요." />
        <Button onClick={handleSubmit}>{text}</Button>
      </form>
      <Footer>
        {value === "login" ? (<Link to="/signup">회원가입</Link>) : (<Link to="/login">로그인</Link>)}
      </Footer>
    </AuthFormBlock>
  )
}
export default AuthForm;

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: black;
    margin-bottom: 1rem;
  }
`;

// 폼 하단에 로그인 혹은 회원가입 링크 보여줌
const Footer = styled.div`
margin-top: 2rem;
font-size: 1.125rem;
text-align: right;
a {
  color: gray;
  text-decoration: none;
  &:hover {
    color: black
  }
}
`;
// &은 sass 문법임 
// css 에서 + 는 1 + 2애서 2에만 해당 css가 적용됨 https://developer.mozilla.org/ko/docs/Web/CSS/%EC%9D%B8%EC%A0%91_%ED%98%95%EC%A0%9C_%EC%84%A0%ED%83%9D%EC%9E%90
const StyledInput = styled.input`
font-size: 1rem;
border: none;
border-bottom: 1px solid #ced4da;
padding-bottom: 0.5rem;
outline: none;
width: 100%;
&:focus {
  color: $oc-teal-7;
  border-bottom: 1px solid #868e96;
}
& + & {
  margin-top: 1rem;
}
`;