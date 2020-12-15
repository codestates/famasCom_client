import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyle = css`
border: none;
cursor: pointer;
outline: none;
margin: 1.25rem 0 0;
padding-top: 0.75rem;
padding-bottom: 0.75rem;
width: 100%;
height: 3rem;
border-radius: 4px;
font-size: 1.125rem;
font-weight: bold;
font-family: '맑은 고딕';
line-height: 1.5;
color: black;
border:black;
background: #fff;
&:hover {
  color:blue;
  border: 2px solid blue;
}
`;

const StyleButton = styled.button`${buttonStyle}`;
const StyleLink = styled(Link)`${buttonStyle}`;

const Button = (props: any) => {
  return props.to ? (<StyleLink {...props} />)
    : (<StyleButton {...props} />)// 버튼이 받아오는 props를 스타일 버튼에게 던진다.
}
export default Button;

