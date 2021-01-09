import React, { forwardRef } from 'react';
import styled from 'styled-components';

function Fifth(props, ref) {
  return (
    <Section ref={((fifthRef) => ref.current.push(fifthRef))}>
      fifth
      fifth
    </Section>
  );
}

export default forwardRef(Fifth);

const Section = styled.section`
  height:400px;
  background-color:blue;

`;
