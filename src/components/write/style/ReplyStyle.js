import styled from "styled-components";

export const Replying = styled.div`
  .reply {
    text-decoration: none;
    cursor: pointer;
  }
`;
export const FormWapper = styled.div`
  display: flex; 
`;

export const CommentSwappar = styled.div`
  align-items: center;
`;

export const Line = styled.div`
  display: none;
  width: 1022px;
  height: 10px;
  color: #fff;
`;

export const ReplyBtn = styled.div`
border-radius: 5px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 1.3rem;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #1c2237;
  color: #fff;
}
`