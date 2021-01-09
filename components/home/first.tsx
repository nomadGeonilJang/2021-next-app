import React, { forwardRef } from 'react';
import styled from 'styled-components';

function First(props, ref) {
  return (
    <Section ref={((firstRef) => ref.current.push(firstRef))}>
      first
    </Section>
  );
}

export default forwardRef(First);

const Section = styled.section<any>`
  height:400px;
  background-color:red;
`;
