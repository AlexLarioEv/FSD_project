import { Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';
import { Page } from '@/widgets/Page';
import { routeConfig } from '@/shared/config';
import { TAppRouteProps } from '@/shared/config/routeConfig/routeConfig';

import { AuthProtect } from './AuthProtect';

// TODO: Починить тесты с роутингом в AppRoute

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: TAppRouteProps) => {
        const element = (
            <Suspense
                fallback={
                    <Page>
                        <PageLoader />
                    </Page>
                }
            >
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    <AuthProtect authOnly={route.authOnly} roles={route.roles}>
                        {element}
                    </AuthProtect>
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
