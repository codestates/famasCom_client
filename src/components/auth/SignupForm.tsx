import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import AuthForm from './AuthForm';
//
type Inputs = { email: string; password: string }
const SignupForm = () => {
  
  const [inputs, setInputs] = useState<Inputs>({ email: '', password: '' });
  const [token, setToken] = useState<string>('');
  const { email, password } = inputs; // 비구조화 할당을 통해 값 추출
	
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      email: '',
      password: '',
    })
  };
  
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      axios
        .post('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/post-user', {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.status === 201) {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      onReset();
    }
  };
  
  return (
    <AuthForm value="signup" email={email} password={password} handleChange={handleChange} handleSubmit={handleSubmit} token={token}/>
  )
}

export default withRouter(SignupForm);