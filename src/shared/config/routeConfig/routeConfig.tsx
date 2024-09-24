import { MainPage, AboutPage, NotFundPage } from "pages"
import { RouteProps } from "react-router-dom"

export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FUND = 'not_fund',
}

export const RoutePath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: '/',
  [EAppRoutes.ABOUT]: '/about',
  [EAppRoutes.NOT_FUND]: '*'
}

export const routeConfig: Record<EAppRoutes, RouteProps> = {
  [EAppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage/>
  },
  [EAppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage/>
  },
  [EAppRoutes.NOT_FUND]: {
    path: RoutePath.not_fund,
    element: <NotFundPage/>
  }
}