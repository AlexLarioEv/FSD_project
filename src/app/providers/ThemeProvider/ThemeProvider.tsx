import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext, ETheme, IThemeContextProps } from '@/shared/contexts';
import { isAuth, useJsonSettings } from '@/entities/User';
import { useAppSelector } from '@/shared/lib/hooks';

type TProps = {
    value: ETheme;
    children: ReactNode;
};

//TODO: Сделать логику темы проще

export const ThemeProvider: FC<TProps> = ({ children, value }) => {
    const [theme, setTheme] = useState<ETheme>(value);
    const { theme: settingsTheme } = useJsonSettings();
    const isAuthUser = useAppSelector(isAuth);
    const [isSettingsThemeInited, setSettingsThemeInited] = useState(false);

    const defaultProps = useMemo<IThemeContextProps>(
        () => ({ theme, setTheme }),
        [theme, setTheme],
    );

    useEffect(() => {
        setTheme(value);
    }, [value]);

    useEffect(() => {
        if (!isSettingsThemeInited && settingsTheme) {
            setTheme(settingsTheme);
            setSettingsThemeInited(true);
        }
    }, [settingsTheme, isSettingsThemeInited]);

    useEffect(() => {
        if (!isAuthUser) {
            setSettingsThemeInited(false);
        }
    }, [isSettingsThemeInited, isAuthUser]);

    useEffect(() => {
        document.body.className = '';

        document.body.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
