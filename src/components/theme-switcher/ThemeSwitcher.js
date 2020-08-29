import React, {useState} from 'react';
import styles from './theme-switcher.module.scss';
import {bemNamesFactory} from 'bem-names';
import {lightTheme, darkTheme} from './colors';

const bem = bemNamesFactory('theme-switcher');

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');

    const applyTheme = (nextTheme) => {
        const theme = nextTheme === 'light' ? lightTheme : darkTheme;

        Object.keys(theme).map(key => {
            const value = theme[key];
            document.documentElement.style.setProperty(key, value);
        });
    };

    const onClick = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        applyTheme(nextTheme);
    };

    return (
        <div className={styles[bem()]}>
            <button className={styles[bem('button')]} onClick={onClick}>Switch theme</button>
        </div>
    );
}

export default ThemeSwitcher;