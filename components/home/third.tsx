import React, { forwardRef } from 'react';
import styled from 'styled-components';

function Third(props, ref) {
  return (
    <Section ref={((thidRef) => ref.current.push(thidRef))}>
      <h1>세 번쨰 지롱@@</h1>
      <span>날라 다니자  슝슝~~~ </span>
      <span>날라 다니자  슝슝~~~ </span>
      <span>날라 다니자  슝슝~~~ </span>
    </Section>
  );
}

export default forwardRef(Third);

const Section = styled.section`
  height:440px;
  background-color:yellow;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  &.active{
    span{
      animation-name: wobble;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }

  

  

  @keyframes wobble { 33% { transform: translateX(-50px); } 66% { transform: translateX(50px); } }

`;
