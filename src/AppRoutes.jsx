import { useRoutes } from 'react-router-dom';
import { Home } from './assets/pages/Home/Home';

export function AppRoutes() {
  return useRoutes([
        {
        element: <Home />,
        path: '/'
        }
    ]
  )
}