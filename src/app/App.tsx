

import { classNames } from 'shared/lib';

import { useTheme } from 'shared/hooks'

import './styles/index.scss';
import { NavBar } from 'widgets';
import { Sidebar } from 'widgets/Sidebar';

import {AppRouter} from 'app/providers/router'

export const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <div>
        <Sidebar/>
      </div>
      <AppRouter/>
    </div>
  );
}
