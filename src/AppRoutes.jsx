import { useRoutes } from 'react-router-dom';
import { Home } from './assets/pages/Home/Home';
import { AddNews } from './assets/pages/AddNews/AddNews';
import { List } from './assets/pages/List/List';

export function AppRoutes() {
  return useRoutes([
        {
        element: <Home />,
        path: '/'
        },
        {
          element: <List />,
          path: '/list'
        },
        {
          element: <AddNews />,
          path: '/addnews'
        }
    ]
  )
}