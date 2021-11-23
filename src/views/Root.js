import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import MainTemplate from '../components/templates/MainTemplate';
import FilteredAppList from '../components/organisms/FilteredAppList';

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <FilteredAppList />
        </MainTemplate>
      </ThemeProvider>
    </>
  );
}

export default Root;
