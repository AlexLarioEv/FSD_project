import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';

import { NavBar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { classNames } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { initAuthData, isInit, isAuth } from '@/entities/User';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/loyouts/MainLayout';

export const App = () => {
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
        <ToggleFeatures
            feature="enableAppRedesigned"
            on={
                <Suspense fallback="">
                    <div className={classNames('app_redesigned', {}, [])}>
                        <MainLayout
                            header={<NavBar />}
                            content={initAuth ? <AppRouter /> : null}
                            sidebar={<Sidebar />}
                            toolbar={<div></div>}
                        />
                    </div>
                </Suspense>
            }
            off={
                <Suspense fallback="">
                    <div className={classNames('app', {}, [])}>
                        <NavBar />
                        <div className="content-page">
                            <Sidebar />
                            {initAuth ? <AppRouter /> : null}
                        </div>
                    </div>
                </Suspense>
            }
        />
    );
};
