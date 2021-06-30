import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import Header from './components/Header/Header';

const themes = {
  light: 'https://bootswatch.com/5/flatly/bootstrap.min.css',
  dark: 'https://bootswatch.com/5/darkly/bootstrap.min.css',
};

const App = () => {
  return (
    <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
      <Container fluid>
        <Header></Header>
      </Container>
    </ThemeSwitcherProvider>
  )

}
export default App;
