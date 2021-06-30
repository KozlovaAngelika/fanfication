import { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Button } from 'react-bootstrap';

const ThemeSwitcherBtn = () => {
    const { switcher, themes } = useThemeSwitcher();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(previous => {
            return !previous;
        });
        switcher({ theme: isDarkMode ? themes.light : themes.dark });
    };

    return (
        <Button variant="secondary" onClick={toggleDarkMode} >{isDarkMode ? 'light theme' : 'dark theme'}</Button>
    );
};
export default ThemeSwitcherBtn;