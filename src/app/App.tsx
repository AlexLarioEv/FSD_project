import  {AppRouter } from 'app/providers/router'

import { NavBar } from 'widgets/Navbar/ui';
import { Sidebar } from 'widgets/Sidebar/ui';

import { useTheme } from 'shared/hooks'
import { classNames } from 'shared/lib';

import './styles/index.scss';

export const App = () => {
  const {theme} = useTheme()
  if(Math.random() > 0.7){
    throw new Error('404')
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <div  className='content-page'>
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  );
}
