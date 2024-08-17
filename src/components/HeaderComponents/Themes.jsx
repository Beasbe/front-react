import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';

let theme = 'light'; // Initialize the theme variable

const changeTheme = (checked) => {
    theme = checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');

    } else {
        document.documentElement.classList.remove('dark');
    }
};

const Themes = () => {
    const [localTheme, setLocalTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        setLocalTheme(theme);
    }, []);

    const handleSwitchChange = (checked) => {
        changeTheme(checked);
        setLocalTheme(theme);
    };

    return (
        <Switch
            checked={localTheme === 'dark'}
            onChange={handleSwitchChange}
            checkedChildren="Dark"
            unCheckedChildren="Light"
        />
    );
};

export { theme, changeTheme };
export default Themes;
