import { FC, ReactNode } from 'react';
import './ThemeBlock.scss';

type TProps = {
    children: ReactNode;
};

export const ThemeBlock: FC<TProps> = ({ children }) => (
    <div className="app themeBlock">{children}</div>
);
