import React, { useState } from 'react';
import './App.scss';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';

const themes = {
  light: 'https://bootswatch.com/5/flatly/bootstrap.min.css',
  dark: 'https://bootswatch.com/5/darkly/bootstrap.min.css',
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('currentTheme'));
  const { login, logout, token, userId, isReady } = useAuth();
  const isLogin = !!token;
  return (
    <AuthContext.Provider value={{ login, logout, token, userId, isReady, isLogin }}>
      <BrowserRouter>
        <ThemeSwitcherProvider defaultTheme={currentTheme} themeMap={themes}>
          <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}></Header>
          <Content></Content>
        </ThemeSwitcherProvider>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App;
