import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Main, MainContent } from './styles';
import GlobalStyles from '../../../styles/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <MainContent>
          {children}
        </MainContent>
      </Main>
      <Footer />
    </>
  );
};

export default Layout; 