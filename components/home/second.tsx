import React, { forwardRef } from 'react';
import styled from 'styled-components';

function Second(props, ref) {
  return (
    <Section ref={((secondRef) => ref.current.push(secondRef))}>
      Second
    </Section>
  );
}
export default forwardRef(Second);

const Section = styled.section`
  height:650px;
  background-color:orange;
`;
