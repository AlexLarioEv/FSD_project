import {Routes, Route, Link} from 'react-router-dom';

import {LazyMainPage, LazyAboutPage} from './pages';

import './index.scss';

export default function App() {
  
  return (
    <div>
      <Link to={'/'}> Main Page </Link>
      <Link to={'/about'}> to about page </Link>
      <Routes>
        <Route path='/about' element={<LazyAboutPage />}/>
        <Route path='/' element={<LazyMainPage />}/>
      </Routes>
    </div>
  );
}
