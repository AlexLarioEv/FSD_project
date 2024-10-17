import { FC , PropsWithChildren} from "react";
import { Navigate } from "react-router-dom";

import { isAuth } from "@/entities/User";
import { useAppSelector } from "@/shared/hooks";
import {RoutePath} from '@/shared/config/routeConfig';




export const AuthProtect:FC<PropsWithChildren> = ({children}) => {
    const auth = useAppSelector(isAuth)

    if(!auth){
        return <Navigate to={RoutePath.main}/>
    }

    return <>{children}</> 
}