import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import AuthForm from '../auth/AuthForm';
import { useHistory } from "react-router-dom";

//
type Inputs = { email: string; password: string; }

const LoginForm = () => {
  const [inputs, setInputs] = useState<Inputs>({ email: '', password: '' });
  const [token, setToken] = useState<string>('');
  const { email, password } = inputs; // 비구조화 할당을 통해 값 추출
  let history = useHistory();

  const onReset = () => {
    setInputs({
      email: '',
      password: '',
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      axios
        .post('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/signin-user', {
          email: email,
          password: password,
        })
        .then((res) => {
          setToken(res.data.token)
          localStorage.setItem("token", res.data.token)
        })
        .then(() => {
          if (localStorage.getItem("token")) {
            history.push("/");
          }

        })
        .catch((res) => {
          if (res.status === 409) {
            alert('로그인에 실패하였습니다');
          }
        });
    }
    onReset();
  };

  return (
    <AuthForm value="login" email={email} password={password} handleChange={handleChange} handleSubmit={handleSubmit} token={token} />
  )
}

export default withRouter(LoginForm);
