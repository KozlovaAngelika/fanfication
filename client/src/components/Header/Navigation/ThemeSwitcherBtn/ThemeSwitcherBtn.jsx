import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Button } from 'react-bootstrap';

const ThemeSwitcherBtn = ({ currentTheme, setCurrentTheme }) => {
    const { switcher, themes } = useThemeSwitcher();
    const toggleTheme = () => {
        setCurrentTheme(previous => {
            if (previous === 'light') {
                return 'dark'
            }
            return 'light'
        });
        switcher({ theme: currentTheme === 'dark' ? themes.light : themes.dark });
    };
    localStorage.setItem('currentTheme', currentTheme);
    return (
        <Button variant="secondary" onClick={toggleTheme}>toggle theme</Button>
    );
};
export default ThemeSwitcherBtn;