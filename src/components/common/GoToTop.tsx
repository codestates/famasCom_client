import React from 'react';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import CSS from 'csstype';

const style:CSS.Properties =  {
  height: '40px',
  width: '40px',
  lineHeight: '40px',
  borderRadius: '4px',
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: '14px',
};

const GoToTop = () => {
  return (
    <BackTop>
       <div style={style}>UP</div>
    </BackTop>
  )
}
export default GoToTop

