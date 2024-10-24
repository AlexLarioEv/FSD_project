import { RoutePath, EAppRoutes } from "@/shared/config/routeConfig";
import MainPage from "@/shared/assets/icons/main-20-20.svg"
import AboutPage from "@/shared/assets/icons/about-20-20.svg"
import ProfilePage from "@/shared/assets/icons/profile-20-20.svg"
import ArticlePage from "@/shared/assets/icons/article-20-20.svg"

import {TSidebarItem} from '../types/types';
import { createSelector } from "@reduxjs/toolkit";
import { getAuthData } from "@/entities/User";

export const getSidebarItems = createSelector(getAuthData,(userData) => {

    const sidebarItems: TSidebarItem[] = [
        {
            text: EAppRoutes.MAIN,
            path:RoutePath.main,
            Icon: MainPage
        },{
            text: EAppRoutes.ABOUT,
            path: RoutePath.about,
            Icon: AboutPage
        }
    ]

    if(userData?.id){
        sidebarItems.push({
            text: EAppRoutes.PROFILE,
            path: `${RoutePath.profile}${userData.id}`,
            Icon: ProfilePage,
            authOnly: true,
        },{
            text: EAppRoutes.ARTICLE,
            path: RoutePath.article,
            Icon: ArticlePage,
            authOnly: true,
        })
    }

    return sidebarItems
})