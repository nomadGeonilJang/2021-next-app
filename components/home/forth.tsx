import React, { forwardRef } from 'react';
import styled from 'styled-components';

function Forth(props, ref) {
  return (
    <Section ref={((forthRef) => ref.current.push(forthRef))}>
      forth
    </Section>
  );
}

export default forwardRef(Forth);
const Section = styled.section`
  height:780px;
  background-color:green;
`;
