import React from 'react';

import AppNavbar from 'components/layouts/AppNavbar';
import GlobalStyles from 'components/layouts/GlobalStyles';
import Main from 'components/layouts/Main';

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyles />
      <AppNavbar />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>);
}
