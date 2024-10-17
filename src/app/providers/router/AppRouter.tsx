import { Suspense, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader/ui'
import { routeConfig } from '@/shared/config';
import { TAppRouteProps } from '@/shared/config/routeConfig/routeConfig';

import {AuthProtect} from './AuthProtect'

export const AppRouter = () => {

    const renderWithWrapper = useCallback((route: TAppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <AuthProtect>{element}</AuthProtect> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
}