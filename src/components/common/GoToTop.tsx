import React from 'react';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import CSS from 'csstype';
import click from '../../images/click.png'
//
const style:CSS.Properties =  {
  height: '40px',
  width: '40px',
  lineHeight: '40px',
  borderRadius: '4px',
  backgroundColor: '#01bf71',
  color: '#010606',
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: 800,
  cursor: `url(${click}), auto`
};

const GoToTop = () => {
  return (
    <BackTop>
       <div style={style}>↑</div>
    </BackTop>
  )
}
export default GoToTop

