import { useRoutes } from 'react-router-dom';
import { Home } from './assets/pages/Home/Home';
import { AddNews } from './assets/pages/AddNews/AddNews';

export function AppRoutes() {
  return useRoutes([
        {
        element: <Home />,
        path: '/'
        },
        {
          element: <AddNews />,
          path: '/addnews'
        }
    ]
  )
}