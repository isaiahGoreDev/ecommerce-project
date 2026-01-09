import { createBrowserRouter } from 'react-router-dom';

import StorefrontLayout from '@/app/layouts/StorefrontLayout';

import HomePage from '@/pages/public/HomePage';

export const router = createBrowserRouter([
  {
    element: <StorefrontLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      // other public routes
    ],
  },
]);
