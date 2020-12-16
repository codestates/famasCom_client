import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const ServicesContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background: rgba(231,226,221,0.5);

  @media screen and (max-width: 1000px) {
    height: 1000px;
  }

  @media screen and (max-width: 768px) {
    height: 1600px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled(LinkR)`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 500px;
  
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABsUlEQVRYR+3XvWsUYRDH8c8ZCIIWQYhWQfGtsLSyU0sJNmojhJBY+BKwCBKwsBUbCwtBLULQyiamyR8gWoSQLsQmJJCAjaWFNhoNA3uwWTaXZ/cudymysLDsPjPzndnZ3zPb0OOj0eP4qgA8xGOsIq5/dAI+FeAKFnIB53CrmwAP8DYXcA0XugkQJX+TC7iO84cAhxU4CBW4lkF8rguTqgNlX8EXjGeBZ3APQziNRfxJgUoFeIKXOYcbOFMIEAChFf1YwlX8x0WEbvwuA0oFmM4yDId/8QsDBYehDedy96YQAhZ68R3XM5AdZqkAxVeQUt0t9OUWvsdY0XA/AYqxSuW7mwDzuNnLCszizoEFiGaJRhvGcWxiGR+ywaNOExaTbVmBF3ha0tohJp/wE/dTWr/FmpYA33CpzQB7mbcEOImJ7Bzcy1PN50lNeBQjmNyHiiQBNJM7gthgRmtmW2ZWCSAcdBriI+5W1YFOQjzD86oAzUq8xqM2Xkd8zpexUgegaRPDR+jFqYog/xDzxKt25oGm7THcxg2cxQl2/b2LASTU9B2+7gaduhtWTDp9ec8BtgFQflUhIQsz9wAAAABJRU5ErkJggg==), auto;
  }
`;

export const ServicesIcon = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #01bf71;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 1.625rem;
    
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 10px;
  color:#1c2237;
`;

export const ServicesP = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color:#1c2237;
`;
//