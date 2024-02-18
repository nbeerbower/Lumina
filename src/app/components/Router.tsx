import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layout/Layout'
import Error from '../pages/Error'

import Model from '../pages/Model'
import Inference from '../pages/Inference'
import Quantization from '../pages/Quantization'
import Settings from '../pages/Settings'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: 'model',
        element: <Model />,
      },
      {
        path: 'inference',
        element: <Inference />,
      },
      {
        path: 'quantization',
        element: <Quantization />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  }
])

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
