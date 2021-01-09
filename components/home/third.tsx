import React, { forwardRef } from 'react';
import styled from 'styled-components';

function Third(props, ref) {
  return (
    <Section ref={((thidRef) => ref.current.push(thidRef))}>
      Third

    </Section>
  );
}

export default forwardRef(Third);

const Section = styled.section`
  height:440px;
  background-color:yellow;
`;
