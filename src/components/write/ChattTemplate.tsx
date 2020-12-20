import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/Responsive'

// ▼ 커뮤니티 페이지의 레이아웃을 나타내는 컴포넌트 ▼
interface ChattTemplateProps {
  children: any;
}

const ChattTemplate = ({ children }: ChattTemplateProps) => {
  return (
    <ChatTemplateBlock>
      {children}
    </ChatTemplateBlock>
  )
}

export default ChattTemplate;

const ChatTemplateBlock = styled(Responsive)`
position: relative;
left: 0;
right: 0;
top: 5rem;
bottom: 0;
margin-bottom: 20%;
background: transparent 75%;
display: flex;
flex-direction: column;
align-items: center;
`

