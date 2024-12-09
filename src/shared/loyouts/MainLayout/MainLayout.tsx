import { FC, ReactNode } from 'react';

import { classNames } from '@/shared/lib';

import styles from './MainLayout.module.scss';

type TMainLayoutProps = {
    className?: string;
    header: ReactNode;
    content: ReactNode;
    sidebar: ReactNode;
    toolbar?: ReactNode;
};

export const MainLayout: FC<TMainLayoutProps> = ({
    className,
    header,
    content,
    sidebar,
    toolbar,
}) => {
    return (
        <div className={classNames(styles.MainLayout, {}, [className])}>
            <div className={styles.sidebar}>{sidebar}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.rightbar}>
                <div className={styles.header}>{header}</div>
                <div className={styles.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};
