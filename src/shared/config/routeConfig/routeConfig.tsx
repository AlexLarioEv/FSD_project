/* eslint-disable alexlario-plugin/layer-imports*/
import { ERoleUser } from "@/entities/User";
import { 
    MainPage, 
    AboutPage,
    ProfilePage, 
    NotFundPage, 
    ArticleDetailsPage, 
    ArticlePage,
    ArticleCreatePage,
    ArticleEditPage,
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

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id:string) => `/profile/${id}`;
export const getRouteArticles = () => '/article';
export const getRouteArticleDetails = (id:string) => `/article/${id}`;
export const getRouteArticleCreate = () => '/article/create';
export const getRouteArticleEdit = (id:string) => `/article/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/article/create';


export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: getRouteMain(),
    [EAppRoutes.ABOUT]: getRouteAbout(),
    [EAppRoutes.PROFILE]: getRouteProfile(':id'),
    [EAppRoutes.ARTICLE]: getRouteArticles(),
    [EAppRoutes.ARTICLE_DETAILS]: getRouteArticleDetails(':id'),
    [EAppRoutes.ARTICLE_CREATE]: getRouteArticleCreate(),
    [EAppRoutes.ARTICLE_EDIT]: getRouteArticleEdit(':id'),
    [EAppRoutes.ADMIN]: getRouteAdmin(),
    [EAppRoutes.FORBIDDEN]: getRouteForbidden(),

    [EAppRoutes.NOT_FUND]: '*'
}

export const routeConfig: Record<EAppRoutes, TAppRouteProps> = {
    [EAppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [EAppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage/>
    },
    [EAppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage/>,
        authOnly: true
    },
    [EAppRoutes.ARTICLE]: {
        path: getRouteArticles(),
        element: <ArticlePage/>,
        authOnly: true
    },
    [EAppRoutes.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage/>,
        authOnly: true
    },
    [EAppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleCreatePage/>,
        authOnly: true
    },
    [EAppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [EAppRoutes.ADMIN]: {
        path: getRouteAdmin(),
        element: <AdminPage />,
        roles: [ERoleUser.ADMIN, ERoleUser.MANAGER]
    },
    [EAppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [EAppRoutes.NOT_FUND]: {
        path: '*',
        element: <NotFundPage/>
    }
}