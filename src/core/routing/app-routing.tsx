import { createBrowserRouter } from 'react-router-dom';
import { Urls } from './urls';
import { HelloWorldPage } from '@/hello-world.page';
import { GiftListPage } from '@/features/gift-list/delivery/pages/gift-list/gift-list.page';

export const AppRouting = createBrowserRouter([
  {
    path: Urls.HOME,
    element: <HelloWorldPage />,
  },
  {
    path: Urls.GIFT_LIST,
    element: <GiftListPage />,
  },
]);
