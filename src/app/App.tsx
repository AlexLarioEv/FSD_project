import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import { MainPage, AboutPage } from 'pages';
import { useTheme , classNames } from 'shared';

import './styles/index.scss';

export const App = () => {
  const {theme, setTheme} = useTheme()

  const handleTheme= () => {
    setTheme(theme)
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={handleTheme}>{theme}</button>
      <Link to={'/'}> Main Page </Link>
      <Link to={'/about'}> to about page </Link>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/' element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
}
