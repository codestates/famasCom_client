import styled from 'styled-components';
export const EntiryWrapper = styled.div`
  display: inline;
`;
export const QuillWrapper = styled.div`
  .ql-container {
    min-height: 30px;
    border-radius: 0px;
    padding: 0;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-container .ql-blank ::before {
    left: 0px;
  }
`;
export const StyleButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0.6rem 0 0;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 8rem;
  height: 2.75rem;
  border-radius: 4px;
  font-size: 1.125rem;
  font-weight: bold;
  font-family: '맑은 고딕';
  color: black;
  background: #6eb584;
  display: inline-block;
  float: right;
  text-align: center;
  line-height: 22px;
  &:hover {
    color: blue;
    border: 2px solid blue;
  }
`;

export const Line = styled.div`
  border-radius: 5px;
  background-color: gray;
  display: block;
  width: 95%;
  height: 2px;
`;
