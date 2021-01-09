import React, { forwardRef } from 'react';
import styled from 'styled-components';

function Forth(props, ref) {
  return (
    <Section ref={((forthRef) => ref.current.push(forthRef))}>
      <h1>네 번째 입니당----</h1>
      <span>아래에서 위로 착!!!!</span>
      <span>아래에서 위로 착!!!!</span>
      <span>아래에서 위로 착!!!!</span>
      <span>아래에서 위로 착!!!!</span>
      <span>아래에서 위로 착!!!!</span>
    </Section>
  );
}

export default forwardRef(Forth);
const Section = styled.section`
  height:780px;
  background-color:green;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  span{
    color:white;
    transform:translateY(50px);
    opacity:0;
    transition:all 2s ease-in;
  }

  &.active{
    span{
      opacity:1;
      transform:translateY(0px);
    }
  }

`;
