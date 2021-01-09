import React, { forwardRef } from 'react';
import styled from 'styled-components';

function Second(props, ref) {
  return (
    <Section ref={((secondRef) => ref.current.push(secondRef))}>
      <h1>두 번째 글 이지롱!</h1>
      <span>빙글 빙글 돌아 보장!!</span>
      <span>빙글 빙글 돌아 보장!!</span>
      <span>빙글 빙글 돌아 보장!!</span>
      <span>빙글 빙글 돌아 보장!!</span>

    </Section>
  );
}
export default forwardRef(Second);

const Section = styled.section`
  height:650px;
  background-color:orange;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  span{
    color:white;    
    opacity:0;
    transition:opacity 1s ease-in;
  }

  &.active{
    span{
      opacity:1;
      animation-name: bingle;
      animation-duration: 5s;
      animation-iteration-count: infinite;
    }
  }




  @keyframes bingle {
  from {
    transform:rotate(0deg)
  }
  to {
    transform:rotate(360deg)
  }
}


`;
