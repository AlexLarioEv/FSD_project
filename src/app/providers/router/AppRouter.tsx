import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui'
import { routeConfig } from 'shared/config';

export const AppRouter = () => {
  return (    
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({path, element})=> <Route key={path} path={path} element={
          <div className='page-wrapper'>
            {element}
          </div>}/>)};
      </Routes>
    </Suspense>
  )
}