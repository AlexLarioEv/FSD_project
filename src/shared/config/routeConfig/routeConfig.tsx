import { MainPage, AboutPage,ProfilePage, NotFundPage, ArticleDetailsPage, ArticlePage } from "@/pages";
import { RouteProps } from "react-router-dom";


export type TAppRouteProps  = RouteProps & {
    authOnly?: boolean;
}


export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE= 'profile',
    ARTICLE = 'article',
    ARTICLE_DETAILS = 'article_details',

    NOT_FUND = 'not_fund',
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.PROFILE]: '/profile',
    [EAppRoutes.ARTICLE]: '/article',
    [EAppRoutes.ARTICLE_DETAILS]: '/article/',

    [EAppRoutes.NOT_FUND]: '*'
}

export const routeConfig: Record<EAppRoutes, TAppRouteProps> = {
    [EAppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [EAppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [EAppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>,
        authOnly: true
    },
    [EAppRoutes.ARTICLE]: {
        path: RoutePath.article,
        element: <ArticlePage/>,
        authOnly: true
    },
    [EAppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage/>,
        authOnly: true
    },
    [EAppRoutes.NOT_FUND]: {
        path: RoutePath.not_fund,
        element: <NotFundPage/>
    }
}