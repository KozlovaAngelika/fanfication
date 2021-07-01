import React, { useState } from 'react';
import './App.scss';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter, Switch } from 'react-router-dom';

const themes = {
  light: 'https://bootswatch.com/5/flatly/bootstrap.min.css',
  dark: 'https://bootswatch.com/5/darkly/bootstrap.min.css',
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('currentTheme'));
  return (
    <BrowserRouter>
      <Switch>
        <ThemeSwitcherProvider defaultTheme={currentTheme} themeMap={themes}>
          <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}></Header>
          <Main></Main>
        </ThemeSwitcherProvider>
      </Switch>
    </BrowserRouter >
  )

}
export default App;
