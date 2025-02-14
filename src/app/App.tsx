import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';

import { NavBar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { classNames } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { initAuthData, isInit, isAuth } from '@/entities/User';
import { PageLoader } from '@/widgets/PageLoader';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/loyouts/MainLayout';

export const App = () => {
    const initUser = useAppSelector(isInit);
    const initAuth = useAppSelector(isAuth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    const classAppName = toggleFeatures({
        name: 'enableAppRedesigned',
        on: () => 'app_redesigned-full-screen',
        off: () => 'app',
    });

    if (!initUser) {
        return (
            <div className={classNames(classAppName, {}, [])}>
                <PageLoader className="" />
            </div>
        );
    }

    return (
        <Suspense fallback="">
            <ToggleFeatures
                feature="enableAppRedesigned"
                on={
                    <div className={classNames('app_redesigned', {}, [])}>
                        <MainLayout
                            header={<NavBar />}
                            content={initAuth ? <AppRouter /> : null}
                            sidebar={<Sidebar />}
                            toolbar={<div></div>}
                        />
                    </div>
                }
                off={
                    <div className={classNames('app', {}, [])}>
                        <NavBar />
                        <div className="content-page">
                            <Sidebar />
                            {initAuth ? <AppRouter /> : null}
                        </div>
                    </div>
                }
            />
        </Suspense>
    );
};
