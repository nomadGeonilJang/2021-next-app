import React from 'react';
import styled from 'styled-components';

function Main({ children }:any) {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  );
}

const MainContainer = styled.main`
  background-color:#111;
  padding-top:80px;
`;

export default Main;
