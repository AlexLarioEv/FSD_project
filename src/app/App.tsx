import  {AppRouter } from '@/app/providers/router'

import { NavBar } from '@/widgets/Navbar/ui';
import { Sidebar } from '@/widgets/Sidebar/ui';

import { classNames } from '@/shared/lib';

export const App = () => {

    return (
        <div className={classNames('app', {}, [])}>
            <NavBar />
            <div  className='content-page'>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
}
