import React, { useState } from 'react';
import './App.scss';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { NoticeContext } from './context/NoticeContext';
import { useAuth } from './hooks/auth.hook';
import { Notice } from './components/Notice/Notice';

const themes = {
  light: 'https://bootswatch.com/5/flatly/bootstrap.min.css',
  dark: 'https://bootswatch.com/5/darkly/bootstrap.min.css',
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('currentTheme') || 'light');
  const { login, logout, token, userId, isReady, name } = useAuth();
  const [message, setMessage] = useState(null);
  const isLogin = !!token;

  return (
    <AuthContext.Provider value={{ login, logout, token, userId, isReady, name, isLogin }}>
      <NoticeContext.Provider value={{ message, setMessage }}>
        <BrowserRouter>
          <ThemeSwitcherProvider defaultTheme={currentTheme} themeMap={themes}>
            <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}></Header>
            <Content></Content>
            <Notice></Notice>
          </ThemeSwitcherProvider>
        </BrowserRouter>
      </NoticeContext.Provider>
    </AuthContext.Provider>
  )
}
export default App;
