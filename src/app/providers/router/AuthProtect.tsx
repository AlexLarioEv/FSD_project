import { FC , PropsWithChildren, useMemo} from "react";
import { Navigate } from "react-router-dom";

import { ERoleUser, isAuth, getRoles } from "@/entities/User";
import { useAppSelector } from "@/shared/hooks";
import {getRouteMain, getRouteForbidden} from '@/shared/config/routeConfig';

type TPropsAuthProtect = {
    roles?: ERoleUser[]
}


export const AuthProtect:FC<PropsWithChildren<TPropsAuthProtect>> = ({children, roles}) => {
    const auth = useAppSelector(isAuth)
    const rolesUser = useAppSelector(getRoles);

    const hasRequiredRoles = useMemo(()=>{
        if(!roles){
            return true
        }
        
        return roles.some((role) => rolesUser?.includes(role))    
    },[roles, rolesUser])

    if(!auth){
        return <Navigate to={getRouteMain()}/>
    }

    if(!hasRequiredRoles){
        return <Navigate to={getRouteForbidden()}/>
    }

    return <>{children}</> 
}