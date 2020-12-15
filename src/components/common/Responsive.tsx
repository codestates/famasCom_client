import React from 'react';
import styled from 'styled-components';
type ResponsiveType = {
  children: any;
}
const Responsive = ({ children, ...rest }:ResponsiveType) => {
  return <ResponsiveBlock {...rest }>{children}</ResponsiveBlock>
}
//
export default Responsive;

const ResponsiveBlock = styled.div`

margin: 0 auto;
padding-left: 1rem;
padding-right: 1rem;
width: 1024px;

@media (max-width: 1024px) {
  width: 768px
}
@media (max-width: 768px) {
  width: 100%
}
`;