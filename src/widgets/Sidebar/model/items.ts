import { FunctionComponent, SVGAttributes } from "react";

import { RoutePath, EAppRoutes } from "@/shared/config/routeConfig";
import MainPage from "@/shared/assets/icons/main-20-20.svg"
import AboutPage from "@/shared/assets/icons/about-20-20.svg"
import ProfilePage from "@/shared/assets/icons/profile-20-20.svg"
import ArticlePage from "@/shared/assets/icons/article-20-20.svg"

export type TSidebarItem = {
    text: string,
    path: string,
    Icon: FunctionComponent<SVGAttributes<SVGElement>>,
    authOnly?: boolean;
}
    

export const sidebarItems: TSidebarItem[] = [
    {
        text: EAppRoutes.MAIN,
        path:RoutePath.main,
        Icon: MainPage
    },{
        text: EAppRoutes.ABOUT,
        path: RoutePath.about,
        Icon: AboutPage
    },{
        text: EAppRoutes.PROFILE,
        path: RoutePath.profile,
        Icon: ProfilePage,
        authOnly: true,
    },{
        text: EAppRoutes.ARTICLE,
        path: RoutePath.article,
        Icon: ArticlePage,
        authOnly: true,
    }
]