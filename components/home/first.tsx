import React, { forwardRef } from 'react';
import styled from 'styled-components';

function First(props, ref) {
  return (
    <Section ref={((firstRef) => ref.current.push(firstRef))}>
      <h1>여기는 첫 번째 페이지 입니다. 만나서 반가워용</h1>
      <span>날아 오자 슝 ~~~</span>
      <span>날아 오자 슝 ~~~</span>
      <span>날아 오자 슝 ~~~</span>
    </Section>
  );
}

export default forwardRef(First);

const Section = styled.section`
  height:400px;
  background-color:red;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  span{
      transform:translateX(-50px);
      transition:all 1s ease-in;
      color:white;
      opacity:0;
  }

  &.active{
    span{
      transform:translateX(0);
      opacity:1;
    }
  }
  


`;
