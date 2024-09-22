import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import { LazyMainPage, LazyAboutPage } from './pages';
import { useTheme } from './theme'

import './styles/index.scss';

export default function App() {
  const {theme, setTheme} = useTheme()

  const handleTheme= () => {
    setTheme(theme)
  }

  return (
    <div className={`app ${theme}`}>
      <button onClick={handleTheme}>{theme}</button>
      <Link to={'/'}> Main Page </Link>
      <Link to={'/about'}> to about page </Link>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/about' element={<LazyAboutPage />}/>
          <Route path='/' element={<LazyMainPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
}
