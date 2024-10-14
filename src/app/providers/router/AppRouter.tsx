import { Suspense, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader/ui'
import { routeConfig } from '@/shared/config';
import { useSelector } from 'react-redux';
import { getUser } from '@/entities/User';

export const AppRouter = () => {

    const {auth} = useSelector(getUser);

    const routes = useMemo(()=> {
        return Object.values(routeConfig).filter(route=>{
            if(route.authOnly && !auth){
                return false
            }
            return true
        })
    }, [auth])


    return (    
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({path, element})=> <Route key={path} path={path} element={
                    <div className='page-wrapper'>
                        {element}
                    </div>}/>)};
            </Routes>
        </Suspense>
    )
}