import {
    getRouteMain,
    getRouteAbout,
    getRouteProfile,
    EAppRoutes,
    getRouteArticles,
} from '@/shared/config/routeConfig';
import MainPage from '@/shared/assets/icons/main-20-20.svg';
import HomePage from '@/shared/assets/icons/newHome.svg';
import AboutPage from '@/shared/assets/icons/about-20-20.svg';
import AboutRedesignedPage from '@/shared/assets/icons/newInfo.svg';
import ProfilePage from '@/shared/assets/icons/profile-20-20.svg';
import ProfileRedesignedPage from '@/shared/assets/icons/newAvatar.svg';
import ArticlePage from '@/shared/assets/icons/article-20-20.svg';
import ArticleRedesignedPage from '@/shared/assets/icons/newList.svg';

import { TSidebarItem } from '../types/types';
import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from '@/entities/User';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getAuthData, (userData) => {
    const sidebarItems: TSidebarItem[] = [
        {
            text: EAppRoutes.MAIN,
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'enableAppRedesigned',
                on: () => HomePage,
                off: () => MainPage,
            }),
        },
        {
            text: EAppRoutes.ABOUT,
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'enableAppRedesigned',
                on: () => AboutRedesignedPage,
                off: () => AboutPage,
            }),
        },
    ];

    if (userData?.id) {
        sidebarItems.push(
            {
                text: EAppRoutes.PROFILE,
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'enableAppRedesigned',
                    on: () => ProfileRedesignedPage,
                    off: () => ProfilePage,
                }),
                authOnly: true,
            },
            {
                text: EAppRoutes.ARTICLE,
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'enableAppRedesigned',
                    on: () => ArticleRedesignedPage,
                    off: () => ArticlePage,
                }),
                authOnly: true,
            },
        );
    }

    return sidebarItems;
});
