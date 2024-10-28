import  {AppRouter } from '@/app/providers/router'

import { NavBar } from '@/widgets/Navbar/ui';
import { Sidebar } from '@/widgets/Sidebar/ui';

import { classNames } from '@/shared/lib';
import { useAppSelector } from '@/shared/hooks';
import { isInit } from '@/entities/User';

export const App = () => {

    const initUser = useAppSelector(isInit)

    return (
        <div className={classNames('app', {}, [])}>
            <NavBar />
            <div className='content-page'>
                <Sidebar/>
                {initUser ?<AppRouter/> : null}
            </div>
        </div>
    );
}
