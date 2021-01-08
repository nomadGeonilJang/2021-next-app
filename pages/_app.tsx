import React from 'react';

import AppNavbar from 'components/layouts/AppNavbar';
import GlobalStyles from 'components/layouts/GlobalStyles';

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyles />
      <AppNavbar />
      <Component {...pageProps} />
    </>);
}
