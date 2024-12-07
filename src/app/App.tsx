import { AppRouter } from './providers/router';

import { NavBar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { classNames } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { initAuthData, isInit } from '@/entities/User';
import { useEffect } from 'react';
import { PageLoader } from '@/widgets/PageLoader';

export const App = () => {
    const initUser = useAppSelector(isInit);
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
                {initUser ? <AppRouter /> : null}
            </div>
        </div>
    );
};
