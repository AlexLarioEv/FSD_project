import { ERoleUser } from "@/entities/User";
import { 
    MainPage, 
    AboutPage,
    ProfilePage, 
    NotFundPage, 
    ArticleDetailsPage, 
    ArticlePage,
    AritcleCteatePage,
    AritcleEditPage,
    ForbiddenPage, 
    AdminPage} from "@/pages";
import { RouteProps } from "react-router-dom";


export type TAppRouteProps  = RouteProps & {
    authOnly?: boolean;
    roles?: ERoleUser[];
}


export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE= 'profile',
    ARTICLE = 'article',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN = 'admin',
    FORBIDDEN='forbidden',


    NOT_FUND = 'not_fund',
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.PROFILE]: '/profile/',
    [EAppRoutes.ARTICLE]: '/article',
    [EAppRoutes.ARTICLE_DETAILS]: '/article/',
    [EAppRoutes.ARTICLE_CREATE]: '/article/create',
    [EAppRoutes.ARTICLE_EDIT]: '/article/',
    [EAppRoutes.ADMIN]: '/admin',
    [EAppRoutes.FORBIDDEN]: '/forbidden',

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
        path: `${RoutePath.profile}:id`,
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
    [EAppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <AritcleCteatePage/>,
        authOnly: true
    },
    [EAppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}:id/edit`,
        element: <AritcleEditPage/>,
        authOnly: true
    },
    [EAppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <AdminPage />,
        roles: [ERoleUser.ADMIN, ERoleUser.MANAGER]
    },
    [EAppRoutes.FORBIDDEN]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />,
    },
    [EAppRoutes.NOT_FUND]: {
        path: RoutePath.not_fund,
        element: <NotFundPage/>
    }
}