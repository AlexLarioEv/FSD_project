import {Suspense} from 'react'

import  {AppRouter } from 'app/providers/router'

import { NavBar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { useTheme } from 'shared/hooks'
import { classNames } from 'shared/lib';

import './styles/index.scss';

export const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <NavBar />
        <div  className='content-page'>
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
}
