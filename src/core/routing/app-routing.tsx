import { createBrowserRouter } from 'react-router-dom';
import { Urls } from './urls';
import { HelloWorldPage } from '@/hello-world.page';

export const AppRouting = createBrowserRouter([
  {
    path: Urls.HOME,
    element: <HelloWorldPage />,
  },
]);
