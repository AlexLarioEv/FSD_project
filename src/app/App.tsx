import { useEffect } from 'react';
import { AppRouter } from './providers/router';

import { NavBar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { classNames } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { initAuthData, isInit, isAuth } from '@/entities/User';
import { PageLoader } from '@/widgets/PageLoader';
import { useTranslation } from 'react-i18next';

// BUG_FIX: i18 падает в ошибку, если не инициализировать useTranslation

export const App = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
    const { t } = useTranslation();

    const initUser = useAppSelector(isInit);
    const initAuth = useAppSelector(isAuth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!initUser) {
        return (
            <div className={classNames('app', {}, [])}>
                <PageLoader className="" />
            </div>
        );
    }

    return (
        <div className={classNames('app', {}, [])}>
            <NavBar />
            <div className="content-page">
                <Sidebar />
                {initAuth ? <AppRouter /> : null}
            </div>
        </div>
    );
};
