import { useContext } from 'react';

import { ThemeContext, ETheme } from '../../..//contexts';

type TProps = {
    toggleTheme: (saveActions?: (theme: ETheme) => void) => void;
    theme: ETheme;
};

export const useTheme = (): TProps => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveActions?: (newTheme: ETheme) => void) => {
        const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
        setTheme?.(newTheme);
        saveActions?.(newTheme);
    };

    return { theme: theme || ETheme.LIGHT, toggleTheme };
};
